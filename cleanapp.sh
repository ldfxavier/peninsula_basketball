#/bin/sh
echo "Limpando watchman..."
watchman watch-del-all
echo "Limpando Temporarios..."
rm -rf $TMPDIR/react-native-packager-cache-* 
rm -rf $TMPDIR/haste-map-react-native-packager-*
rm -rf $TMPDIR/metro-bundler-cache-* 
echo "Removendo node_modules/..."
rm -rf node_modules/
echo "Instalando node_modules e limpando cache..."
npm install --cache /tmp/empty-cache
# npm audit fix
#echo "Criando um novo bundle para o..."
#react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
# npm start -- --reset-cache
echo ""
