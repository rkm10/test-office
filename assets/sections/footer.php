<!-- Footer -->
<footer class="body-font-poppins">
    <p>Copyright © <?php echo date("Y") ?> Novel Office. All rights reserved.</p>
</footer>

<!-- Back to top button -->
<a href="#back-to-top" id="backToTop">
    <span class="icon-arrow-up"></span>
</a>

<!-- WhatsApp Button -->
<div class="whatsapp-button">
    <a class="bodymovin" href="https://api.whatsapp.com/send?phone=919900001315&text=I%20am%20looking%20for%20more%20information!" target="_blank">
    <span class="icon-icons8-whatsapp"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
    </a>
</div>

<!-- Floating Button and Form Starts-->
<button id="floating-lead-btn">
    BOOK A FREE TOUR !
</button>

<div class="floating-lead-form">
    <div class="floating-form-container">

        <div class="floating-form-content">
            <h3>Let's Connect</h3>

            <?php include '../assets/sections/form.php' ?>

        </div>

        <div class="floating-form-close">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ffffff">
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                </path>
            </svg>
        </div>

    </div>
</div>

<!--Popup form starts-->
<div class="popup_form">

    <span class="close">&times;</span>
    <h3>Let’s Connect!</h3>

    <?php include '../assets/sections/form.php' ?>

</div>
<div class="close_popup"></div>
<!-- popup form ends-->

<!-- ---------------------------Scripts ----------------------------------->

<script type="text/javascript" src="../assets/js/jquery-3.2.1.slim.min.js"></script>
<script>
    // ------ Banner Read More Script Starts -----------------------------//
    $(document).ready(function() {
        $('.desktop-read-more-content').each(function() {
            var contentWords = $(this).text().trim().split(" ");

            if (contentWords.length > 13) {
                var visibleText = contentWords.slice(0, 13).join(" ");
                var hiddenText = ' ' + contentWords.slice(13).join(" ");
                
                var html = visibleText + '<span class="ellipsis">...</span><span class="more" style="display: none;">' + hiddenText + '</span><a href="#" class="desktop-read-more-btn"> Read More</a>';
                $(this).html(html);
            }
        });

        $('.desktop-read-more-btn').on('click', function(e) {
            e.preventDefault();
            var moreText = $(this).prev('.more');
            var ellipsis = moreText.prev('.ellipsis');
            if (moreText.is(':visible')) {
                moreText.fadeOut(500, function() {
                    ellipsis.show();
                });
                $(this).text(' Read More');
            } else {
                ellipsis.hide();
                moreText.fadeIn(500);
                $(this).text(' Read Less');
            }
        });
    });
    // ------ Banner Read More Script Ends -------------------------------//
</script>
<script src="../assets/js/swiper-bundle.min.js"></script>
<script src="../assets/js/script.js"></script>

<script src="../assets/js/tawk.js"></script>

</body>

</html>