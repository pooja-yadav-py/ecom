const footerHTML = `
  <footer class="section-footer">
        <div class="footer-container container">
          <div class="content_1">
            <img src="../public/images/log.png" alt="logo"/>
            <p>Welcome to Pooja Store, Your ultimate destination for cutting-edge Gadgets.</p>
            <img src="../public/images/UPI.avif"/>
          </div>
          <div class="contact_2">
            <h4>SHOPPING</h4>
            <a href="#">Computer Store</a>
            <a href="#">Laptop Store</a>
            <a href="#">Accessories</a>
            <a href="#">Sales & Discount</a>
          </div>

          <div class="contact_3">
            <h4>Experience</h4>
            <a href="./contact.html">Contact Us</a>
            <a href="#" target="_blank">Payment Method</a>
            <a href="#" target="_blank">Delivery</a>
            <a href="#" target="_blank">Return and Exchange</a>
          </div>

          <div class="contact_4">
            <h4>NEWSLETTER</h4>
            <P>Be the first to know about new <br /> arrivals, sales & promos! </P>
            <div class="f-mail">
              <input type="email" placeholder="Your Email"/>
              <i class="bx bx-envelope"></i>
            </div>
            <hr />
          </div>  
        </div>

        <div class="f-design">
          <div class="f-design-txt">
            <p>Design and code by Pooja Yadav</p>
          </div>
        </div>
      </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);