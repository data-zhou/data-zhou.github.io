$(function(){
    mainListContent();
    mining();
    blockDetails();
    // 图表页的数据动态和数据产品
    function mainListContent(){
        $.ajax({
            type:"POST",
            url:"http://121.201.80.40:8085",
            dataType: 'json',
            success:function(data){
                for(var i=0; i<data.dynamic.length;i++){
                    var stateLink_data = "<div class='stateLink-data'>"+
                                         "<span>"+data.dynamic[i].date+"</span>"+
                                         "<span>"+data.dynamic[i].num+"</span>"+
                                         "<span>"+data.dynamic[i].coin+"</span>"+
                                         "<span class='green'>"+data.dynamic[i].from+"</span>"+
                                         "<span>"+data.dynamic[i].device+"</span>"+
                                         "</div>";
                    $("#mainListContent").append(stateLink_data)
                }
            }
        })
    }
    function mining(){
        $.ajax({
            type:"POST",
            url:"http://121.201.80.40:8085",
            dataType: 'json',
            success:function(data){
                for(var i=0;i<data.device.length;i++){
                    var mining = "<li><i></i>"+data.device[i]+"</li>";
                    $(".mining ul").append(mining);
                }

            }
        })
    }
    //区块数据
    function blockDetails(){
        $.ajax({
            type:"POST",
            url:"http://121.201.80.40:8085/getid",
            dataType: 'json',
            success:function(data){
                for(var i=0;i<data.length;i++){
                    var describe = '<a href="mainDetails.html" class="blockListShow">'+
                                   '<h3 class="blockListShow-time">'+data[i].date+'</h3>'+
                                        '<div class="blockListShow-cont">'+
                                        '<div class="type"><img src="../images/shou.png" alt=""></div>'+
                                        '<div class="describe">'+
                                            "<p><span class='describe-number'>"+data[i].num+"</span></p>"+
                                            "<p><span>"+data[i].addr+"</span></p>"+
                                        '</div>'+
                                        '<div class="typeAsk">'+
                                            '<p><span class="taleft">主链</span><span>成功</span></p>'+
                                            '<p><span class="taleft">子链</span><span>成功</span></p>'+
                                        '</div></div></a>';
                    $(".blockList").append(describe);
                }

            }
        })
    }
    //主链子链数据
    function detailsCont(){
        $.ajax({
            type:"POST",
            url:"http://121.201.80.40:8085/detail",
            dataType: 'json',
            success:function(data){
                console.log(data);
                var linkContent = '<ul><li><i>币种</i>'+
                                '<span>'+data.Coin+'</span>'+'</li>'+
                                '<li><i>类型</i>'+
                                '<span>'+data.Mold+'</span>'+'</li>'+
                                '<li><i>状态</i>'+
                                '<span>'+data.status+'</span>'+'</li>'+
                                '<li><i>金额</i>'+
                                '<span>'+data.Money+'</span>'+'</li>'+
                                '<li><i>时间</i>'+
                                '<span>'+data.Date+'</span>'+'</li>'+
                                '<li><i>交易ID</i>'+
                                '<span>'+data.Tradeid+'</span>'+'</li>'+
                                '<li><i>子链ID</i>'+
                                '<span>'+data.Sonid+'</span>'+'</li>'+
                                '<li><i>确认节点</i>'+
                                '<span>'+data.Node+'</span>'+'</li>'+
                                '<li><i>发送地址：</i>'+
                                '<span>'+data.Send+'</span>'+'</li>'+
                                '<li><i>接收地址</i>'+
                                '<span>'+data.Receive+'</span>'+'</li>'+
                                '<li><i>旷工费</i>'+
                                '<span>'+data.WorkMoney+'</span>'+'</li>'+
                                '<li><i>区块高度</i>'+
                                '<span>'+data.Height+'</span>'+'</li></ul>';
                $(".detailsCont").append(linkContent);
            }
        })
    }

    detailsCont();
})

