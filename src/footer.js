import React from 'react';
import './footer.css';
import GoogleIcon from './picture/google.png';
import Siba from './picture/sibapp.png';
import Bazar from './picture/bazar.png';
import Tejarat from './picture/tejarat.png';
import Anjoman from './picture/anjoman.png'
function Footer() {
    return (
        <div id="sec5">
            <h4 id="line">مراقبت و محافظت از حساب کاربری و رمز عبور هر کاربر بر<br /> عهده کاربر است .ریحون سریعترین راه سفارش آنلاین غذا <br />است. منوی عکس دار رستوان های اطرافتان را براساس مکان <br /> .خود به راحتی مشاهده کنید و سفارش دهید</h4>
            <h4 id="show">لیست رستوران ها </h4>
            <div id="line1">
                <h3> تماس با ریحون</h3>
                <h4 class="text-color">درباره ی ریحون<br />تماس با ما<br />وبلاگ ریحون</h4>
            </div>
            <div id="line2">
                <h3 > رستوران ها</h3>
                <h4 class="text-color">ثبت رستوران<br /></h4>
            </div>
            <div id="line3">
                <h3> پشتیبانی ریحون</h3>
                <h4 class="text-color">سوالات متداول<br />تماس با پشتیبانی<br />قوانین و مقررات</h4>
            </div>
            <div id="line4">
                <h3 > اپلیکیشن های موبایل</h3>
                <img class="imgae-border" src={GoogleIcon} /><br /><img class="imgae-border" src={Siba} /><br /><img class="imgae-border" src={Bazar} />
            </div>
            <img id="tejarat" src={Tejarat} />
            <img id="anjoman" src={Anjoman} />
            <div id="lasesec">
                <i id="copyright" class="fa fa-copyright"></i>
                <h4 id="all">2017, Reyhoon,All Rights Reserved</h4>
                <div >
                <a href="https://plus.google.com/u/0/110461935266638365339">
                    <i id="google" class="fa fa-google-plus"></i>
                    </a> 
                </div>
                <div>
                <a href="instagram.com/reyhoonia">
                    <i id="insta" class="fa fa-instagram"></i>
                    </a>
                </div>
                <div>
                    <a href="twitter.co/reyhoonia">
                    <i id="twitter" class="fa fa-twitter"></i>
                    </a>
                </div>
                    <div>
                    <a href="https://facebook.com/rehyoonia">
                     <i id="facebook" class="fa fa-facebook-f"></i>
                    </a>
                    </div>
                <div class="tooltip">
                <a href="https://t.me/reyhoonia">
                    <i id="telegram" class="fa fa-paper-plane"></i>
                        </a>
                </div>
            </div>
        </div>
    );
}
export default Footer;