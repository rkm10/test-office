<form action="../assets/phpmailer/mailSender.php" method="post">
    <span>
        <input type="text" name="name" placeholder="Name" size="40" required>
        <input type="email" name="email" placeholder="Email" required>
    </span>
    <span>
        <input type="tel" name="mobile" placeholder="Mobile" pattern="[0-9]{10}" maxlength="10" required>
        <input type="text" name="location" placeholder="Preferred Location" required>
    </span>
    <span>
        <textarea name="Message" rows="4" placeholder="Your Message"></textarea>
    </span>
    <span>
        <input type="submit" value="Connect to an expert" class="submitBtn">
    </span>
</form>