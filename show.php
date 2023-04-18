<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    echo "Email: " . $Email . "<br>";
    echo "Password: " . $Password;
  ?>
</body>
</html>