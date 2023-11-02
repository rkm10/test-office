<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$db_host = 'localhost';
$db_username = 'uj2xzp4omwdyw';
$db_password = '*R@Novel2k23,./#';
$db_name = 'db5qirb84nxixy';

date_default_timezone_set('Asia/Kolkata');

// Connect to the database using PDO (PHP Data Objects)
try {
    $connection = new PDO("mysql:host=$db_host;dbname=$db_name", $db_username, $db_password);
    // Set the PDO error mode to exception
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

    $source_url = $_SERVER['HTTP_REFERER'];
    // Parse the URL to get its components
    $parts = parse_url($source_url);

    // Initialize variable without Ouery Parameter
    $filteredUrl = $parts['scheme'] . '://' . $parts['host'] . $parts['path'];
    $queryUrl = $parts['scheme'] . '://' . $parts['host'] . $parts['path'];

    $utm_source = "Direct Visit";

    if(isset($parts['query'])){
        $query_string = $parts['query'];
        parse_str($query_string, $query_params);
        if (isset($query_params['utm_source'])) {
            $utm_source = $query_params['utm_source'];
            $queryUrl = $parts['scheme'] . '://' . $parts['host'] . $parts['path'] . "utm_source=?" . $utm_source;
        }
    }

if ($_POST['name']) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['mobile'];
    $location = $_POST['location'];
    $message = strip_tags($_POST['message']);
    $ip_address = $_SERVER['REMOTE_ADDR'];
    $datetime = date('Y-m-d H:i:s');

    // Email sending code
    $to = "leads@noveloffice.in";
    $subject = $utm_source ." - Novel Office Enquiry \n" . $datetime;
    
    // Build the message content
    $message1 = '<table>';
    $message1 .= '<tr><td colspan="2"><strong> Dear, Novel Office</strong></td></tr>';
    $message1 .= '<tr><td></td></tr>';
    $message1 .= '<tr><td><strong>Name</strong></td><td>: '.$name.'</td></tr>';
    $message1 .= '<tr><td><strong>Number </strong></td><td>: +91-'.$phone.'</td></tr>';
    $message1 .= '<tr><td><strong>Email </strong></td><td>: '.$email.'</td></tr>';
    $message1 .= '<tr><td><strong>Location </strong></td><td>: '.$location.'</td></tr>';
    $message1 .= '<tr><td><strong>Message </strong></td><td>: '.$message.'</td></tr>';
    $message1 .= '<tr><td><strong>Source </strong></td><td>: '.$source_url.'</td></tr>';
    $message1 .= '<tr><td><strong>IP Address </strong></td><td>: '.$ip_address.'</td></tr>';
    $message1 .= '</table>';
    $message1 .='<br><br><h4><strong>Thanks and Regards </strong></h4>';

    // Set additional headers
    $headers = "From: webdev@noveloffice.in \r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";
    $headers .= "CC: \r\n";

    // Send the email
    $mail = mail($to, $subject, $message1, $headers);

    // Insert data into the database using prepared statement
    if ($mail || !$mail) {
        try {
            $query = "INSERT INTO contactform (name, email, phone, location, message, source_url, ip_address, date) 
                      VALUES (:name, :email, :phone, :location, :message, :source_url, :ip_address, :date)";
            $stmt = $connection->prepare($query);
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':phone', $phone);
            $stmt->bindParam(':location', $location);
            $stmt->bindParam(':message', $message);
            $stmt->bindParam(':source_url', $queryUrl);
            $stmt->bindParam(':ip_address', $ip_address);
            $stmt->bindParam(':date', $datetime);
            $stmt->execute();

            if(isset($parts['query']) && isset($query_params['utm_source'])){
                echo "<script>window.location.href='{$filteredUrl}thank-you.php?utm_source={$utm_source}&phone={$phone}&email={$email}'</script>";
            }else{
                echo "<script>window.location.href='{$filteredUrl}thank-you.php?phone={$phone}&email={$email}'</script>";
            }

        } catch (PDOException $e) {
            // Error occurred while inserting data
            echo "Error: " . $e->getMessage();
        }
    } else {
        echo "<script>window.location.href='$filteredUrl'</script>";
    }
} else {
    echo "<script>window.location.href='$filteredUrl'</script>";
}

// Close the database connection
$connection = null;
?>