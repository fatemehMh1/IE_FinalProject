import React,{fragment} from 'react';
import './Resturant.css';
import BImage from './picture/topImage.jpg';

function Resturan() {
    return (
        <div>
        <div>
            <img src={BImage} id="backgroundP2"/>
        </div>
        <p id="textP2"> <span>23</span>رستوران امکان سرویس دهی به <a href="" id="areaS">این منطقه</a> دارند.</p>

       <input type="text" name="search" placeholder="جستجوی رستوران در این محدوده" ></input>
           <div id="filters">
               <span class="choose">فیلتر بر اساس نوع غذا</span>
               <hr class="line"></hr>
               <form>
                   <input type="text" id="text" placeholder="جستجوی دسته بندی غذاها"/><br></br>
               </form>
               <div class="dives">
               <lable for="sandvich"> ساندویچ</lable>
               <input type="checkbox" name="foods" value="ساندویچ" id="sandvich"/>
               </div>
               <hr class="line"></hr>
               <div class="dives">
               <lable for="khoresht"> خورشت</lable>
               <input type="checkbox" name="foods" value="خورشت" id="khoresht"/>
               </div>
               <hr class="line"></hr>
               <div class="dives">
               <lable for="ghaza"> غذای ایرانی</lable>
               <input type="checkbox" name="foods" value="غذای ایرانی" id="ghaza"/>
               </div>
               <hr class="line"></hr>
               <div class="dives">
               <lable for="berger"> برگر</lable>
               <input type="checkbox" name="foods" value="ّبرگر" id="berger"/>
               </div>
               <hr class="line"></hr>
               <div class="dives">
               <lable for="pitza"> پیتزا</lable>
               <input type="checkbox" name="foods" value="پیتزا" id="pitza"/>
               </div>
               <hr class="line"></hr>
               <div class="dives">
               <lable for="salad"> سالاد</lable>
               <input type="checkbox" name="foods" value="سالاد" id="salad"/>
               </div>
               <hr class="line"></hr>
               <div class="dives">
               <lable for="khoresfastfoodt"> فست فود</lable>
               <input type="checkbox" name="foods" value="فست فود" id="fastfood"/>
               </div>
               <hr class="line"></hr>
               <div class="dives">
               <lable for="pasta"> پاستا</lable>
               <input type="checkbox" name="foods" value="پاستا" id="pasta"/>
               </div>
               <hr class="line"></hr>
               <div>
                   <button id="more">بیشتر</button>
               </div>
               <hr class="line"></hr>

               <div id="openResturant">

               </div>
               <div id="closeResturant">

               </div>
           </div>
       </div>
    );
}
export default Resturan;
