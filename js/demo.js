var banner={
    timer:null,
    timer2:null,
    SuDu:10,
    sudu2:5000,
    BuChang:0,
    zongchangdu:800,
    start:function(){
        var me=this;
        this.timer=setInterval(function(){
            me.BuChang+=5;
            $(".box ul").css("margin-left",-me.BuChang+"px");
            if(me.BuChang>=me.zongchangdu){
                clearInterval(me.timer);
                me.timer=null;
                var firstli=$(".box ul li:first");
                $(".box ul").append(firstli);
                $(".box ul").css("margin-left","0px");
                me.BuChang=0;
            }
        },me.SuDu);
    },
    start2:function(){
        var me=this;
        this.timer2=setInterval(function(){
            if(me.timer==null){
                me.start();
            }
        },me.sudu2)
    },
    start3:function(){
        $(".box").mouseover(function(){
            console.log("停")
            clearInterval(banner.timer2);
            banner.timer2=null;
        });
        $(".box").mouseout(function(){
            console.log("动");
            banner.start2();
        });
    }
};
banner.start2();
banner.start3();


