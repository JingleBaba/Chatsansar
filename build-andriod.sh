EXPO_ANDROID_KEYSTORE_PASSWORD="12345678" \
EXPO_ANDROID_KEY_PASSWORD="12345678" \
turtle build:android \
  --type apk \
  --keystore-path ./revolution.jks\
  --keystore-alias "key0" \
  --allow-non-https-public-url \
  --public-url http://127.0.0.1:8000/android-index.json