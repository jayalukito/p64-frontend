package expo.modules.smsreader

import android.Manifest
import android.content.pm.PackageManager
import android.provider.Telephony
import androidx.core.content.ContextCompat
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class SmsReaderModule : Module() {

  override fun definition() = ModuleDefinition {

    Name("SmsReader")

    AsyncFunction("getMessages") { limit: Int ->

      val context = appContext.reactContext
        ?: throw Exception("Android context is unavailable")

      val permissionGranted =
        ContextCompat.checkSelfPermission(
          context,
          Manifest.permission.READ_SMS
        ) == PackageManager.PERMISSION_GRANTED

      if (!permissionGranted) {
        throw Exception("READ_SMS permission has not been granted")
      }

      val messages = mutableListOf<Map<String, Any?>>()

      val projection = arrayOf(
        Telephony.Sms.Inbox._ID,
        Telephony.Sms.Inbox.ADDRESS,
        Telephony.Sms.Inbox.BODY,
        Telephony.Sms.Inbox.DATE,
        Telephony.Sms.Inbox.READ
      )

      val cursor = context.contentResolver.query(
        Telephony.Sms.Inbox.CONTENT_URI,
        projection,
        null,
        null,
        "${Telephony.Sms.Inbox.DATE} DESC"
      )

      cursor?.use {

        val idIndex =
          it.getColumnIndexOrThrow(Telephony.Sms.Inbox._ID)

        val addressIndex =
          it.getColumnIndexOrThrow(Telephony.Sms.Inbox.ADDRESS)

        val bodyIndex =
          it.getColumnIndexOrThrow(Telephony.Sms.Inbox.BODY)

        val dateIndex =
          it.getColumnIndexOrThrow(Telephony.Sms.Inbox.DATE)

        val readIndex =
          it.getColumnIndexOrThrow(Telephony.Sms.Inbox.READ)

        var count = 0

        while (it.moveToNext() && count < limit) {

          messages.add(
            mapOf(
              "id" to it.getLong(idIndex).toString(),
              "sender" to it.getString(addressIndex),
              "body" to it.getString(bodyIndex),
              "date" to it.getLong(dateIndex),
              "read" to (it.getInt(readIndex) == 1)
            )
          )

          count++
        }
      }

      return@AsyncFunction messages
    }
  }
}