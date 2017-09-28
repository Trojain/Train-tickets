(function () {
        //浏览器打开12306登录购票 (https://kyfw.12306.cn/otn/leftTicket/init)
        alert("Farris help you go home！500ms抢一次深圳到长沙的票！");
        $("#query_ticket").on("click", function () {
            $("#avail_ticket").attr({"checked": true});
            var param = {
                date: $("#train_date").val("2016-10-01").val(),
                from: $("#fromStationText").val("SZQ").val(),
                to: $("#toStationText").val("CSQ").val()
            };
            $.ajax({
                type: "GET",
                url: "https://kyfw.12306.cn/otn/leftTicket/queryT",
                data: "leftTicketDTO.train_date=" + param.date + "&leftTicketDTO.from_station=" +
                param.from + "&leftTicketDTO.to_station=" + param.to + "&purpose_codes=ADULT",
                success: function (data) {
                    console.log(data);
                    var _tickets = $(".btn72");
                    if (!!_tickets.length) {
                        _tickets[0].click();
                        $("#tryPlayer").click();  //火车鸣笛15秒
                        setTimeout(function () {
                            $("#tryPlayer").click();
                        }, 15000);
                        clearInterval(grabTimer)
                    }
                },
                error: function (error, status) {
                    console.log("oh shit ! ", error);
                    clearInterval(grabTimer);
                }
            });
        });
        var grabTimer = setInterval(function () {
            $("#query_ticket").click();
        }, 500);
    })();