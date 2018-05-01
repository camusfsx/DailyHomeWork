if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo '<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>
<link rel='stylesheet' type="text/css" href="css/style.css">
<script src="js/main.js" type="text/javascript" charset="utf-8" async defer></script>'>> index.html
  echo 'h1{color:red;}' >> css/style.css
  echo 'var string = "Hello World";
alert(string);' >> js/main.js
  echo 'success'
  exit
fi