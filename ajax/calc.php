<?php
header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');

if ($_POST['op'] == 'sum') {
    echo json_encode(["sum" => $_POST['num1'] + $_POST['num2']]);
} elseif ($_POST['op'] == 'dif') {
    echo json_encode(["dif" => $_POST['num1'] - $_POST['num2']]);
} elseif ($_POST['op'] == 'mull') {
    echo json_encode(["mull" => $_POST['num1'] * $_POST['num2']]);
} elseif ($_POST['op'] == 'del') {
    echo json_encode(["del" => $_POST['num1'] / $_POST['num2']]);
}
