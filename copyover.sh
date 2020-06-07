yarn build
rm -R /mnt/e/oldcoustier/spiral
cp -r build/. /mnt/e/oldcoustier/spiral
rm /mnt/e/oldcoustier/spiral/static/js/*.map
rm /mnt/e/oldcoustier/spiral/static/css/*.map

