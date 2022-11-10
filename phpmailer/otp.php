<?php
session_start();
if (isset($_POST['Reachusphone']) && !empty($_POST['Reachusphone'])) {
    $OTP = rand(1000, 5000);
    $_SESSION["OTP"] = $OTP;
    $data = [
        'phone' => '+91' . $_POST['Reachusphone'], // Receivers phone
        'body' => 'Your OTP is ' . $OTP, // Message
    ];
    $json = json_encode($data);
    $url = 'https://eu129.chat-api.com/instance141854/message?token=a86bzwc058inrbm3';
    $options = stream_context_create(['http' => [
        'method' => 'POST',
        'header' => 'Content-type: application/json',
        'content' => $json
    ]
    ]);
    $result = file_get_contents($url, false, $options);
    echo json_encode(array('result' => json_decode($result), 'OTP' => $OTP));
} else {
    echo json_encode(array('result' => [], 'OTP' => null));
}

exit;