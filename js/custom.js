
//////////////////////////////////////// jquery code //////////////////////////////////////////
    
      //function for fazar button
      var f11 = 5;
      var f22 = 0;
      //Hour increament function
      function fazorHourInc(num){
        if(localStorage.getItem('fh')!=null){
          f11 = parseInt(localStorage.getItem('fh')) + num; //increament value
        }else{
          f11 = parseInt(f11) + num;
        }
        //display changes 
        if(localStorage.getItem('fm')!=null){
          $("#fazor").val(f11+':'+localStorage.getItem('fm')); 
        }else{
          $("#fazor").val(f11+':'+f22);
        }
        localStorage.setItem('fh',f11);
        window.location = window.location.href;
      }
      //Hour decreament function
      function fazorHourDec(num){
        if(localStorage.getItem('fh')!=null){
          f11 = parseInt(localStorage.getItem('fh')) - num; //decreament value
        }else{
          f11 = parseInt(f11) - num;
        }
        //display decrement
        if(localStorage.getItem('fm')!=null){
          $("#fazor").val(f11+':'+localStorage.getItem('fm')); 
        }else{
          $("#fazor").val(f11+':'+f22);
        }
        localStorage.setItem('fh',f11);
        window.location = window.location.href;
      }
      //Minut increament function
      function fazorMinutInc(num){
        if(localStorage.getItem('fm')!=null){
          f22 = parseInt(localStorage.getItem('fm')) + num; //increament value
        }else{
          f22 = parseInt(f22) + num;
        }
        //display changes 
        if(localStorage.getItem('fh')!=null){
          $("#fazor").val(localStorage.getItem('fh')+':'+f22); 
        }else{
          $("#fazor").val(f11+':'+f22);
        }
        localStorage.setItem('fm',f22);
        window.location = window.location.href;
      }
      //Minut decreament function
      function fazorMinutDec(num){
        if(localStorage.getItem('fm')!=null){
          f22 = parseInt(localStorage.getItem('fm')) - num; //decreament value
        }else{
          f22 = parseInt(f22) - num;
        }
        //display decrement
        if(localStorage.getItem('fh')!=null){
          $("#fazor").val(localStorage.getItem('fh')+':'+f22); 
        }else{
          $("#fazor").val(f11+':'+f22);
        }
        localStorage.setItem('fm',f22);//store value
        window.location = window.location.href;
      }
    //function for Johr button
      var j11 = 13;
      var j22 = 15;
      //Hour increament function
      function johrHourInc(num){
        if(localStorage.getItem('jh')!=null){
          j11 = parseInt(localStorage.getItem('jh')) + num; //increament value
        }else{
          j11 = parseInt(j11) + num;
        }
        //display changes 
        if(localStorage.getItem('jm')!=null){
          $("#johr").val(j11+':'+localStorage.getItem('jm')); 
        }else{
          $("#johr").val(j11+':'+j22);
        }
        localStorage.setItem('jh',j11);
        window.location = window.location.href;
      }
      //Hour decreament function
      function johrHourDec(num){
        if(localStorage.getItem('jh')!=null){
          j11 = parseInt(localStorage.getItem('jh')) - num; //decreament value
        }else{
          j11 = parseInt(j11) - num;
        }
        //display decrement
        if(localStorage.getItem('fm')!=null){
          $("#johr").val(j11+':'+localStorage.getItem('jm')); 
        }else{
          $("#johr").val(j11+':'+j22);
        }
        localStorage.setItem('jh',j11);
        window.location = window.location.href;
      }
      //Minut increament function
      function johrMinutInc(num){
        if(localStorage.getItem('jm')!=null){
          j22 = parseInt(localStorage.getItem('jm')) + num; //increament value
        }else{
          j22 = parseInt(j22) + num;
        }
        //display changes 
        if(localStorage.getItem('jh')!=null){
          $("#johr").val(localStorage.getItem('jh')+':'+j22); 
        }else{
          $("#johr").val(j11+':'+j22);
        }
        localStorage.setItem('jm',j22);
        window.location = window.location.href;
      }
      //Minut decreament function
      function johrMinutDec(num){
        if(localStorage.getItem('jm')!=null){
          j22 = parseInt(localStorage.getItem('jm')) - num; //decreament value
        }else{
          j22 = parseInt(j22) - num;
        }
        //display decrement
        if(localStorage.getItem('jh')!=null){
          $("#johr").val(localStorage.getItem('jh')+':'+j22); 
        }else{
          $("#johr").val(j11+':'+j22);
        }
        localStorage.setItem('jm',j22);//store value
        window.location = window.location.href;
      }
      //function for ASR button
      var a11 = 16;
      var a22 = 15;
      //Hour increament function
      function asrHourInc(num){
        if(localStorage.getItem('ah')!=null){
          a11 = parseInt(localStorage.getItem('ah')) + num; //increament value
        }else{
          a11 = parseInt(a11) + num;
        }
        //display changes 
        if(localStorage.getItem('am')!=null){
          $("#asr").val(a11+':'+localStorage.getItem('am')); 
        }else{
          $("#asr").val(a11+':'+a22);
        }
        localStorage.setItem('ah',a11);
        window.location = window.location.href;
      }
      //Hour decreament function
      function asrHourDec(num){
        if(localStorage.getItem('ah')!=null){
          a11 = parseInt(localStorage.getItem('ah')) - num; //decreament value
        }else{
          a11 = parseInt(a11) - num;
        }
        //display decrement
        if(localStorage.getItem('am')!=null){
          $("#asr").val(a11+':'+localStorage.getItem('am')); 
        }else{
          $("#asr").val(a11+':'+a22);
        }
        localStorage.setItem('ah',a11);
        window.location = window.location.href;
      }
      //Minut increament function
      function asrMinutInc(num){
        if(localStorage.getItem('am')!=null){
          a22 = parseInt(localStorage.getItem('am')) + num; //increament value
        }else{
          a22 = parseInt(a22) + num;
        }
        //display changes 
        if(localStorage.getItem('ah')!=null){
          $("#asr").val(localStorage.getItem('ah')+':'+a22); 
        }else{
          $("#asr").val(a11+':'+a22);
        }
        localStorage.setItem('am',a22);
        window.location = window.location.href;
      }
      //Minut decreament function
      function asrMinutDec(num){
        if(localStorage.getItem('am')!=null){
          a22 = parseInt(localStorage.getItem('am')) - num; //decreament value
        }else{
          a22 = parseInt(a22) - num;
        }
        //display decrement
        if(localStorage.getItem('ah')!=null){
          $("#asr").val(localStorage.getItem('ah')+':'+a22); 
        }else{
          $("#asr").val(a11+':'+a22);
        }
        localStorage.setItem('am',a22);//store value
        window.location = window.location.href;
      }
      //function for Magrib button
      var m11 = 18;
      var m22 = 15;
      //Hour increament function
      function magribHourInc(num){
        if(localStorage.getItem('mh')!=null){
          m11 = parseInt(localStorage.getItem('mh')) + num; //increament value
        }else{
          m11 = parseInt(m11) + num;
        }
        //display changes 
        if(localStorage.getItem('mm')!=null){
          $("#magrib").val(m11+':'+localStorage.getItem('mm')); 
        }else{
          $("#magrib").val(m11+':'+m22);
        }
        localStorage.setItem('mh',m11);
        window.location = window.location.href;
      }
      //Hour decreament function
      function magribHourDec(num){
        if(localStorage.getItem('mh')!=null){
          m11 = parseInt(localStorage.getItem('mh')) - num; //decreament value
        }else{
          m11 = parseInt(m11) - num;
        }
        //display decrement
        if(localStorage.getItem('mm')!=null){
          $("#magrib").val(m11+':'+localStorage.getItem('mm')); 
        }else{
          $("#magrib").val(m11+':'+m22);
        }
        localStorage.setItem('mh',m11);
        window.location = window.location.href;
      }
      //Minut increament function
      function magribMinutInc(num){
        if(localStorage.getItem('mm')!=null){
          m22 = parseInt(localStorage.getItem('mm')) + num; //increament value
        }else{
          m22 = parseInt(m22) + num;
        }
        //display changes 
        if(localStorage.getItem('mh')!=null){
          $("#magrib").val(localStorage.getItem('mh')+':'+m22); 
        }else{
          $("#magrib").val(m11+':'+m22);
        }
        localStorage.setItem('mm',m22);
        window.location = window.location.href;
      }
      //Minut decreament function
      function magribMinutDec(num){
        if(localStorage.getItem('mm')!=null){
          m22 = parseInt(localStorage.getItem('mm')) - num; //decreament value
        }else{
          m22 = parseInt(m22) - num;
        }
        //display decrement
        if(localStorage.getItem('mh')!=null){
          $("#magrib").val(localStorage.getItem('mh')+':'+m22); 
        }else{
          $("#magrib").val(m11+':'+m22);
        }
        localStorage.setItem('mm',m22);//store value
        window.location = window.location.href;
      }
      // Esha value initialize
      var e11 = 19;
      var e22 = 15;
      //Hour increament function
      function eshaHourInc(num){
        if(localStorage.getItem('eh')!=null){
          e11 = parseInt(localStorage.getItem('eh')) + num; //increament value
        }else{
          e11 = parseInt(e11) + num;
        }
        //display changes 
        if(localStorage.getItem('em')!=null){
          $("#esha").val(e11+':'+localStorage.getItem('em')); 
        }else{
          $("#esha").val(e11+':'+e22);
        }
        localStorage.setItem('eh',e11);
        window.location = window.location.href;
      }
      //Hour decreament function
      function eshaHourDec(num){
        if(localStorage.getItem('eh')!=null){
          e11 = parseInt(localStorage.getItem('eh')) - num; //decreament value
        }else{
          e11 = parseInt(e11) - num;
        }
        //display decrement
        if(localStorage.getItem('em')!=null){
          $("#esha").val(e11+':'+localStorage.getItem('em')); 
        }else{
          $("#esha").val(e11+':'+e22);
        }
        localStorage.setItem('eh',e11);
        window.location = window.location.href;
      }
      //minut increament function
      function eshaMinutInc(num){
        if(localStorage.getItem('em')!=null){
          e22 = parseInt(localStorage.getItem('em')) + num; //increament value
        }else{
          e22 = parseInt(e22) + num;
        }
        //display changes 
        if(localStorage.getItem('eh')!=null){
          $("#esha").val(localStorage.getItem('eh')+':'+e22); 
        }else{
          $("#esha").val(e11+':'+e22);
        }
        localStorage.setItem('em',e22);
        window.location = window.location.href;
      }
      //minut decreament function 
      function eshaMinutDec(num){
        if(localStorage.getItem('em')!=null){
          e22 = parseInt(localStorage.getItem('em')) - num; //decreament value
        }else{
          e22 = parseInt(e22) - num;
        }
        //display decrement
        if(localStorage.getItem('eh')!=null){
          $("#esha").val(localStorage.getItem('eh')+':'+e22); 
        }else{
          $("#esha").val(e11+':'+e22);
        }
        localStorage.setItem('em',e22);//store value
        window.location = window.location.href;
      }
      //jumua value initialize
      var ju11 = 13;
      var ju22 = 30;
      //Hour increament function
      function jumuaHourInc(num){
        if(localStorage.getItem('juh')!=null){
          ju11 = parseInt(localStorage.getItem('juh')) + num; //increament value
        }else{
          ju11 = parseInt(ju11) + num;
        }
        //display changes 
        if(localStorage.getItem('jum')!=null){
          $("#jumua").val(ju11+':'+localStorage.getItem('jum')); 
        }else{
          $("#jumua").val(ju11+':'+ju22);
        }
        localStorage.setItem('juh',ju11);
        window.location = window.location.href;
      }
      //Hour decreament function
      function jumuaHourDec(num){
        if(localStorage.getItem('juh')!=null){
          ju11 = parseInt(localStorage.getItem('juh')) - num; //decreament value
        }else{
          ju11 = parseInt(ju11) - num;
        }
        //display decrement
        if(localStorage.getItem('jum')!=null){
          $("#jumua").val(ju11+':'+localStorage.getItem('jum')); 
        }else{
          $("#jumua").val(ju11+':'+ju22);
        }
        localStorage.setItem('juh',ju11);
        window.location = window.location.href;
      }
      //minut increament function
      function jumuaMinutInc(num){
        if(localStorage.getItem('jum')!=null){
          ju22 = parseInt(localStorage.getItem('jum')) + num; //increament value
        }else{
          ju22 = parseInt(ju22) + num;
        }
        //display changes 
        if(localStorage.getItem('juh')!=null){
          $("#jumua").val(localStorage.getItem('juh')+':'+ju22); 
        }else{
          $("#jumua").val(ju11+':'+ju22);
        }
        localStorage.setItem('jum',ju22);
        window.location = window.location.href;
      }
       //minut decreament function 
       function jumuaMinutDec(num){
        if(localStorage.getItem('jum')!=null){
          ju22 = parseInt(localStorage.getItem('jum')) - num; //decreament value
        }else{
          ju22 = parseInt(ju22) - num;
        }
        //display decrement
        if(localStorage.getItem('juh')!=null){
          $("#jumua").val(localStorage.getItem('juh')+':'+ju22); 
        }else{
          $("#jumua").val(ju11+':'+ju22);
        }
        localStorage.setItem('jum',ju22);//store value
        window.location = window.location.href;
      }

      //////////////////////// 5 Owakto Namazer time change function //////////////////////////////////// 
        //display fazar time 
        if(localStorage.getItem('fh')!=null && localStorage.getItem('fm')!=null){
          $("#fazor").val(localStorage.getItem('fh')+':'+(localStorage.getItem('fm')<10?'0'+localStorage.getItem('fm'):localStorage.getItem('fm')));//display time of prayer
        }else if(localStorage.getItem('fh')==null && localStorage.getItem('fm')!=null){
          $("#fazor").val(f11+':'+(localStorage.getItem('fm')<10?'0'+localStorage.getItem('fm'):localStorage.getItem('fm')));//display time of prayer
        }else if(localStorage.getItem('fh')!=null && localStorage.getItem('fm')==null){
          $("#fazor").val(localStorage.getItem('fh')+':'+f22);//display time of prayer
        }else{
          $("#fazor").val(f11+':'+f22);//display time of prayer
        }
        //display johr time 
        if(localStorage.getItem('jh')!=null && localStorage.getItem('jm')!=null){
          $("#johr").val(localStorage.getItem('jh')+':'+localStorage.getItem('jm'));//display time of prayer
        }else if(localStorage.getItem('jh')==null && localStorage.getItem('jm')!=null){
          $("#johr").val(j11+':'+localStorage.getItem('jm'));//display time of prayer
        }else if(localStorage.getItem('jh')!=null && localStorage.getItem('jm')==null){
          $("#johr").val(localStorage.getItem('jh')+':'+j22);//display time of prayer
        }else{
          $("#johr").val(j11+':'+j22);//display time of prayer
        }
        //set value in the display board
        var hout_time_arr = Array('13','14','15','16','17','18','19','20','21','22','23');//stander time formate array
        var count = 0;
        for(var t=0;t<=hout_time_arr.length;t++){
          count++;
          if(localStorage.getItem('jh') == hout_time_arr[t]){ //check condition
            //match the condition to get formate
            $("#johr_show").val((count<10?'0'+count:count)+':'+(localStorage.getItem('jm') !=null ? localStorage.getItem('jm')<10?'0'+localStorage.getItem('jm'):localStorage.getItem('jm'):j22));
            //terminate loop if condition true
            break;
          }else{
            $("#johr_show").val($("#johr").val());
          }
        }
        //display asr time 
        if(localStorage.getItem('ah')!=null && localStorage.getItem('am')!=null){
          $("#asr").val(localStorage.getItem('ah')+':'+localStorage.getItem('am'));//display time of prayer
        }else if(localStorage.getItem('ah')==null && localStorage.getItem('am')!=null){
          $("#asr").val(a11+':'+localStorage.getItem('am'));//display time of prayer
        }else if(localStorage.getItem('ah')!=null && localStorage.getItem('am')==null){
          $("#asr").val(localStorage.getItem('ah')+':'+a22);//display time of prayer
        }else{
          $("#asr").val(a11+':'+a22);//display time of prayer
        } 
        //set value in the display board
        var count2 = 0;
        for(var t=0;t<=hout_time_arr.length;t++){
          count2++;
          if(localStorage.getItem('ah') == hout_time_arr[t]){ //check condition
            //match the condition to get formate
            $("#asr_show").val((count2<10?'0'+count2:count2)+':'+(localStorage.getItem('am') !=null ? localStorage.getItem('am')<10?'0'+localStorage.getItem('am'):localStorage.getItem('am'):a22));
            //terminate loop if condition true
            break;
          }else{
            $("#asr_show").val($("#asr").val());
          }
        }  
        //display Magrib time
        if(localStorage.getItem('mh')!=null && localStorage.getItem('mm')!=null){
          $("#magrib").val(localStorage.getItem('mh')+':'+localStorage.getItem('mm'));//display time of prayer
        }else if(localStorage.getItem('mh')==null && localStorage.getItem('mm')!=null){
          $("#magrib").val(m11+':'+localStorage.getItem('mm'));//display time of prayer
        }else if(localStorage.getItem('mh')!=null && localStorage.getItem('mm')==null){
          $("#magrib").val(localStorage.getItem('mh')+':'+m22);//display time of prayer
        }else{
          $("#magrib").val(m11+':'+m22);//display time of prayer
        }  
        //set value in the display board
        var count3 = 0;
        for(var t=0;t<=hout_time_arr.length;t++){
          count3++;
          if(localStorage.getItem('mh') == hout_time_arr[t]){ //check condition
            //match the condition to get formate
            $("#magrib_show").val((count3<10?'0'+count3:count3)+':'+(localStorage.getItem('mm') !=null ? localStorage.getItem('mm')<10?'0'+localStorage.getItem('mm'):localStorage.getItem('mm'):m22));
            //terminate loop if condition true
            break;
          }else{
            $("#magrib_show").val($("#magrib").val());
          }
        }    
        //display Magrib time
        if(localStorage.getItem('eh')!=null && localStorage.getItem('em')!=null){
          $("#esha").val(localStorage.getItem('eh')+':'+localStorage.getItem('em'));//display time of prayer
        }else if(localStorage.getItem('eh')==null && localStorage.getItem('em')!=null){
          $("#esha").val(e11+':'+localStorage.getItem('em'));//display time of prayer
        }else if(localStorage.getItem('eh')!=null && localStorage.getItem('em')==null){
          $("#esha").val(localStorage.getItem('eh')+':'+e22);//display time of prayer
        }else{
          $("#esha").val(e11+':'+e22);//display time of prayer
        } 
        //set value in the display board 
        var count4 = 0;
        for(var t=0;t<=hout_time_arr.length;t++){
          count4++;
          if(localStorage.getItem('eh') == hout_time_arr[t]){ //check condition
            //match the condition to get formate
            $("#esha_show").val((count4<10?'0'+count4:count4)+':'+(localStorage.getItem('em') !=null ? localStorage.getItem('em')<10?'0'+localStorage.getItem('em'):localStorage.getItem('em'):e22));
            //terminate loop if condition true
            break;
          }else{
            $("#esha_show").val($("#esha").val());
          }
        } 
        //jumua namaz time display
        if(localStorage.getItem('juh')!=null && localStorage.getItem('jum')!=null){
          $("#jumua").val(localStorage.getItem('juh')+':'+localStorage.getItem('jum'));//display time of prayer
        }else if(localStorage.getItem('juh')==null && localStorage.getItem('jum')!=null){
          $("#jumua").val(ju11+':'+localStorage.getItem('jum'));//display time of prayer
        }else if(localStorage.getItem('juh')!=null && localStorage.getItem('jum')==null){
          $("#jumua").val(localStorage.getItem('juh')+':'+ju22);//display time of prayer
        }else{
          $("#jumua").val(ju11+':'+ju22);//display time of prayer
        } 
        //set value in the display board 
        var count5 = 0;
        for(var t=0;t<=hout_time_arr.length;t++){
          count5++;
          if(localStorage.getItem('juh') == hout_time_arr[t]){ //check condition
            //match the condition to get formate
            $("#jumua_show").val((count5<10?'0'+count5:count5)+':'+(localStorage.getItem('jum') !=null ? localStorage.getItem('jum')<10?'0'+localStorage.getItem('jum'):localStorage.getItem('jum'):ju22));
            //terminate loop if condition true
            break;
          }else{
            $("#jumua_show").val($("#jumua").val());
          }
        } 
    

    //function for button style
    $("#get_btn").mouseenter(function(){
      //display button on hover
      $("button.time-inc-fazor-btn").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
      $("button.time-inc-fazor-btns2").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn").mouseleave(function(){
      //display button on hover
      $(".time-inc-fazor-btn").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-fazor-btns2").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_johr").mouseenter(function(){
      //display button on hover
      $(".time-inc-johr-btn").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-johr-btns2").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_johr").mouseleave(function(){
      //display button on hover
      $(".time-inc-johr-btn").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-johr-btns2").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_asr").mouseenter(function(){
      //display button on hover
      $(".time-inc-asr-btn").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-asr-btns2").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_asr").mouseleave(function(){
      //display button on hover
      $(".time-inc-asr-btn").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-asr-btns2").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_magrib").mouseenter(function(){
      //display button on hover
      $(".time-inc-magrib-btn").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-magrib-btns2").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_magrib").mouseleave(function(){
      //display button on hover
      $(".time-inc-magrib-btn").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-magrib-btns2").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_esha").mouseenter(function(){
      //display button on hover
      $(".time-inc-esha-btn").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-esha-btns2").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_esha").mouseleave(function(){
      //display button on hover
      $(".time-inc-esha-btn").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-esha-btns2").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_jumua").mouseenter(function(){
      //display button on hover
      $(".time-inc-jumua-btn").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-jumua-btns2").css({'background':'#54d3fe','transition':'2s','color':'#f2f2f2'});
    });
    $("#get_btn_jumua").mouseleave(function(){
      //display button on hover
      $(".time-inc-jumua-btn").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
      $(".time-inc-jumua-btns2").css({'background':'#f2f2f2','transition':'2s','color':'#f2f2f2'});
    });
    //End function for button style
   
      //for loading call function
        $(document).ready(function(){
            //function for owl carousel
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                items: 1,
                autoplay:true,
                autoplayTimeout:25000,//time delay
                animateOut: 'fadeOut',//slider behaviour
                responsive:false,
            });
            //get current date and day for english
            var eng_date = new Date();
            var dayName = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
            var dayNameBangla = new Array('রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার');
            var monthName = new Array('January','February','March','April','May','June','July','August','September','Octobar','November','December');
            var getDay = eng_date.getDay();
            var getDate = eng_date.getDate();
            var getMonth = eng_date.getMonth();
            var getYear = eng_date.getFullYear();
            var full_eng_date =  getDate+" "+monthName[getMonth]+" "+getYear;
            //show date user-end
            $("#egn_date").html(full_eng_date);
            //show day english and bangla 
            $("#day_eng").html('<b>'+dayName[getDay]+'</b>');
            $("#day_bang").html('<b>'+dayNameBangla[getDay]+'</b>');
            //get real digital clock time 
            function showTime(){
                // to get current time/ date.
                var date = new Date();
                // to get the current hour
                var h = date.getHours();
                  // to get the current minutes
                var m = date.getMinutes();
                //to get the current second
                var s = date.getSeconds();
                // AM, PM setting
                var session = "AM"; 
                
               //conditions for times behavior 
                if ( h == 0 ) {
                  h = 12;
                }
                if( h >= 12 ){
                   session = "PM";
                   }
                
                if ( h > 12 ){
                  h = h - 12;
                }
                m = ( m < 10 ) ? m = "0" + m : m;
                s = ( s < 10 ) ? s = "0" + s : s;
                
                //putting time in one variable
                var time = h + ":" + m + ":" + s +" <span style='font-size: 22px'>"+session+"</span>";
                //putting time in our div
                $('#digital_clock').html(time);
                //to change time in every seconds
                setTimeout( showTime, 1000 );
              }
              showTime();

              ////////////////////////time count down for namaz //////////////////////////////////
                var getFazarValue = $("#fazor").val();
                var getJohrValue = $("#johr").val();
                var getAsrValue = $("#asr").val();
                var getMagribValue = $("#magrib").val();
                var getEshaValue = $("#esha").val();
                //count for smalest value
                var fazarCount = new Date(full_eng_date+' '+getFazarValue).getTime()-new Date().getTime();
                var johrCount = new Date(full_eng_date+' '+getJohrValue).getTime()-new Date().getTime();
                var asrCount = new Date(full_eng_date+' '+getAsrValue).getTime()-new Date().getTime();
                var magribCount = new Date(full_eng_date+' '+getMagribValue).getTime()-new Date().getTime();
                var eshaCount = new Date(full_eng_date+' '+getEshaValue).getTime()-new Date().getTime();
                //oakto time array
                let owaktoArr = new Array(fazarCount,johrCount,asrCount,magribCount,eshaCount);
                var newArr = Array();
                for(var i=0;i<owaktoArr.length;i++){
                    if(owaktoArr[i]>0){
                        newArr.push(owaktoArr[i]); //insert value into new array without negative
                    }
                }

                //buble sort ascending order algorithm
                let bubbleSortAlgo = (newArr) => {
                    let len = newArr.length;
                    let checked;
                    do {
                        checked = false;
                        for (let i = 0; i < len; i++) {
                            if (newArr[i] > newArr[i + 1]) {
                                let tmp = owaktoArr[i];
                                newArr[i] = newArr[i + 1];
                                newArr[i + 1] = tmp;
                                checked = true;
                            }
                        }
                    } while (checked);
                    return newArr;
                 };
                 //end algorithm
                 let arrLen = newArr.length;//get length of array
                 if(arrLen > 0){
                    var countDownDate = newArr[0] + new Date().getTime();//if not empty new array
                 }else{
                    var countDownDate = -1; //if new array empty
                 }
                
                //var countDownDate = new Date(full_eng_date+' '+getMagribValue).getTime();
                // Update the count down every 1 second
                var x = setInterval(function() {

                // Get today's date and time
                var now = new Date().getTime();
                    
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                    
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                var h =  hours<10?'0'+hours:hours;
                var m = minutes<10?'0'+minutes:minutes;
                var s = seconds<10?'0'+seconds:seconds;
                document.getElementById("next_pray_time").innerHTML =  h+ ":"
                + m + ":" +s ;

                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("next_pray_time").innerHTML = "<b style ='font-size:25px'>নামাজ শুরু </b>";

                }
                }, 1000);

                ///////for bangla date 
                $("#bn_tarikh").html(new banglaDateConverter().convert("j F, Y বঙ্গাব্দ"));

                //for Hijri Date Converter ///////

                function gmod(n, m){
                    return ((n % m) + m) % m;
                  }
                  
                  function kuwaiticalendar(date, adjust) {
                    var today = date? new Date(+date) : new Date();
                    if (adjust) {
                      today.setDate(today.getDate() + +adjust);
                    }
                  
                    var day = today.getDate();
                    var month = today.getMonth();
                    var year = today.getFullYear();
                    var m = month + 1;
                    var y = year;
                  
                    if (m < 3) {
                        y -= 1;
                        m += 12;
                    }
                  
                    var a = Math.floor(y / 100);
                    var b = 2 - a + Math.floor(a / 4);
                  
                    if (y < 1583) b = 0;
                    if (y == 1582) {
                      if (m > 10)  b = -10;
                      if (m == 10) {
                        b = 0;
                        if (day > 4) b = -10;
                      }
                    }
                  
                    var jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;
                  
                    b = 0;
                    if(jd > 2299160){
                      a = Math.floor((jd - 1867216.25) / 36524.25);
                      b = 1+a-Math.floor(a / 4);
                    }
                  
                    var bb = jd+b+1524;
                    var cc = Math.floor((bb - 122.1) / 365.25);
                    var dd = Math.floor(365.25 * cc);
                    var ee = Math.floor((bb - dd) / 30.6001);
                    day = (bb - dd) - Math.floor(30.6001 * ee);
                    month = ee - 1;
                  
                    if (ee > 13) {
                      cc += 1;
                      month = ee - 13;
                    }
                    year = cc - 4716;
                    var wd = gmod(jd + 1, 7) + 1;
                  
                    var iyear = 10631./30.;
                    var epochastro = 1948084;
                    var epochcivil = 1948085;
                  
                    var shift1 = 8.01 / 60.;
                  
                    var z = jd-epochastro;
                    var cyc = Math.floor(z/10631.);
                    z = z - 10631 * cyc;
                    var j = Math.floor((z - shift1) / iyear);
                    var iy = 30 * cyc + j;
                    z = z - Math.floor(j * iyear + shift1);
                    var im = Math.floor((z + 28.5001) / 29.5);
                  
                    if (im == 13) im = 12;
                    var id = z-Math.floor(29.5001*im-29);
                  
                    return [
                      day,       //calculated day
                      month - 1, //calculated month
                      year,      //calculated year
                      jd - 1,    //day number
                      wd - 1,    //weekday number
                      id,        //islamic date
                      im - 1,    //islamic month
                      iy         //islamic year
                    ];
                  }
            
                //end english to bangla number converter
                var numbersE = {
                    0:'০',
                    1:'১',
                    2:'২',
                    3:'৩',
                    4:'৪',
                    5:'৫',
                    6:'৬',
                    7:'৭',
                    8:'৮',
                    9:'৯'
                };
        
                 function replaceNumbersE2B(input) {
                    var output = [];
                    for (var i = 0; i < input.length; ++i) {
                        if (numbersE.hasOwnProperty(input[i])) {
                            output.push(numbersE[input[i]]);
                        } else {
                            output.push(input[i]);
                        }
                    }
                    return output.join('');
                }
        
                //end english to bangla number converter
                  
                  function writeIslamicDate(date, adjustment) {
                    var wdNames = ["Ahad", "Ithnin", "Thulatha", "Arbaa", "Khams", "Jumuah", "Sabt"];
                    var iMonthNames = ["মুহররম", "সফর", "রবিউল আউয়াল", "রবিউছ ছানি", "জামাদিউল আউয়াল", "জামাদিউছ ছানি",
                                       "রজব", "শা’বান", "রমজান", "শাওয়াল", "জুল কাইদাহ", "জুল হিজ্জাহ"];
                    var iDate = kuwaiticalendar(date, adjustment);
                    var outputIslamicDate = replaceNumbersE2B(''+iDate[5]-1+'') + " " +
                                            iMonthNames[iDate[6]] + " " + replaceNumbersE2B(''+iDate[7]+'');
                    return outputIslamicDate;
                  }
                  
                  $("#arabic_date").html(writeIslamicDate(new Date(full_eng_date))+' হিজরী ');

                  //end arabic converter
          
                
                   //for Ramadan times
                  var monthArr = Array(15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14);
                  var shehriArr = Array('04:16','04:15','04:14','04:13','04:12','04:11','04:10','04:09','04:08','04:07',
                                        '04:06','04:06','04:04','04:03','04:02','04:01','04:00','04:00','03:59','03:58',
                                        '03:57','03:56','03:56','03:55','03:54','03:53','03:53','03:52','03:51','03:51');
                  var iftarArr = Array('06:16','06:17','06:17','06:18','06:18','06:18','06:19','06:19','06:20','06:20',
                                        '06:20','06:20','06:21','06:22','06:22','06:22','06:23','06:23','06:24','06:24',
                                        '06:25','06:25','06:26','06:26','06:26','06:27','06:27','06:28','06:28','06:29'); 
                  
                  if(getMonth == 3 && getYear == '2021'){
                    var countday = -1;
                    for(var r=0;r<16;r++){
                      countday++;
                      if(monthArr[r] == getDate){
                        $("#time_seheri").html('আজ  ==>  সেহেরির শেষ সময় : '+replaceNumbersE2B(shehriArr[countday]) );
                        $("#time_ifter").html('ইফতারের সময় : '+ replaceNumbersE2B(iftarArr[countday]) );
                        var html = '';
                        html+='<br><h5><b>Today</b></h5>';
                        html+='<table class="table table-dark text-center" style="font-size: 24px;">';
                        html+='<thead><tr><th>Sehri</th><th>Iftar</th></tr></thead>';
                        html+='<tbody><tr>';
                        html+='<td>'+shehriArr[countday]+'</td>';
                        html+='<td>'+iftarArr[countday]+'</td>';
                        html+='</tr></tbody>';
                        html+='</table>';
                        $("#sehri_iftar").html(html);
                        break;
                      }else{
                        $("#sehri_iftar").html('');
                        $("#time_ifter").html('');
                        $("#time_seheri").html('');
                      }
                    }
                  }
                  else if(getMonth == 4 && getYear == '2021'){
                    var countday2 = 15;
                    for(var r=16;r<31;r++){
                      countday2++;
                      if(monthArr[r] == getDate){
                        $("#time_seheri").html('আজ  ==>  সেহেরির শেষ সময় : '+replaceNumbersE2B(shehriArr[countday2]) );
                        $("#time_ifter").html('ইফতারের সময় : '+ replaceNumbersE2B(iftarArr[countday2]) );
                        var html = '';
                        html+='<br><h5><b>Today</b></h5>';
                        html+='<table class="table table-dark text-center" style="font-size: 24px;">';
                        html+='<thead><tr><th>Sehri</th><th>Iftar</th></tr></thead>';
                        html+='<tbody><tr>';
                        html+='<td>'+shehriArr[countday2]+'</td>';
                        html+='<td>'+iftarArr[countday2]+'</td>';
                        html+='</tr></tbody>';
                        html+='</table>';
                        $("#sehri_iftar").html(html);
                        break;
                      }else{
                        $("#sehri_iftar").html('');
                        $("#time_ifter").html('');
                        $("#time_seheri").html('');
                      }
                    }
                  }else{
                    $("#sehri_iftar").html('');
                    $("#time_ifter").html('');
                    $("#time_seheri").html('');
                  }
                  //Get Next Prayer Time Marker /////
                  var presentTime = new Date().getTime();
                  var fajorMark = new Date(full_eng_date+' '+getFazarValue).getTime();
                  var johrMark = new Date(full_eng_date+' '+getJohrValue).getTime();
                  var asrMark = new Date(full_eng_date+' '+getAsrValue).getTime();
                  var magribMark = new Date(full_eng_date+' '+getMagribValue).getTime();
                  var eshaMark = new Date(full_eng_date+' '+getEshaValue).getTime();

                  if(presentTime > fajorMark && presentTime <= johrMark){
                    $("#johr_row").css({'background':'#54d3fe','border-radius':'65px'});
                    $(".time-inc-johr-btn").css({'background':'#54d3fe','color':'#54d3fe'});
                    $(".time-inc-johr-btns2").css({'background':'#54d3fe','color':'#54d3fe'});
                  }else if(presentTime > johrMark && presentTime <= asrMark){
                    $("#asr_row").css({'background-color':'#54d3fe','border-radius':'65px'});
                    $(".time-inc-asr-btn").css({'background':'#54d3fe','color':'#54d3fe'});
                    $(".time-inc-asr-btns2").css({'background':'#54d3fe','color':'#54d3fe'});
                  }else if(presentTime > asrMark && presentTime <= magribMark){
                    $("#magrib_row").css({'background-color':'#54d3fe','border-radius':'65px'});
                    $(".time-inc-magrib-btn").css({'background':'#54d3fe','color':'#54d3fe'});
                    $(".time-inc-magrib-btns2").css({'background':'#54d3fe','color':'#54d3fe'});
                  }else if(presentTime > magribMark && presentTime <= eshaMark){
                    $("#esha_row").css({'background-color':'#54d3fe','border-radius':'65px'});
                    $(".time-inc-esha-btn").css({'background':'#54d3fe','color':'#54d3fe'});
                    $(".time-inc-esha-btns2").css({'background':'#54d3fe','color':'#54d3fe'});
                  }else{
                    $("#fajor_row").css({'background-color':'#54d3fe','border-radius':'65px'});
                    $(".time-inc-fazor-btn").css({'background':'#54d3fe','color':'#54d3fe'});
                    $(".time-inc-fazor-btns2").css({'background':'#54d3fe','color':'#54d3fe'});
                  }

                 // console.log(johrMark);

                
            
            
        });


       