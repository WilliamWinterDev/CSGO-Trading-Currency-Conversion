jQuery.ajax({
	url: "https://free.currconv.com/api/v7/convert?q=EUR_GBP,EUR_USD&compact=ultra&apiKey=<API KEY>",
	success: successFunc
  });

function successFunc(data)
{
	setTimeout(function(){ successFuncSleep(data) }, 3000)
}

function successFuncSleep(data)
{
	const exchangeGBP = data.EUR_GBP;
	const exchangeUSD = data.EUR_USD;
	jQuery(".c_Gray.f_12px").each(function(index){

		var text = jQuery(this).text().toString();

		const eurPrice = text.replace("€", "").replace("(", "").replace(")", "").replace(",", "");

		const gbpPrice = parseFloat(eurPrice * exchangeGBP).toFixed(2);
		const usdPrice = parseFloat(eurPrice * exchangeUSD).toFixed(2);

		jQuery(this).html("<span style='text-align: center !important;'>&pound;" + gbpPrice + "<br><span style='font-size: 0.75em;color:crimson;'>($" + usdPrice + " | €" + eurPrice + ")</span></span>")
	});
}