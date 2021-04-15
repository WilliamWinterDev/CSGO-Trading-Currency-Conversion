jQuery.ajax({
	url: "https://free.currconv.com/api/v7/convert?q=USD_GBP,USD_EUR&compact=ultra&apiKey=c7a86fcc49475b204dbb",
	success: successFunc
  });

function successFunc(data)
{
	const exchangeGBP = data.USD_GBP;
	const exchangeEUR = data.USD_EUR;
	jQuery(".item-price-display").each(function(index){

		var text = jQuery(this).text().toString();

		const usdPrice = text.replace("$", "").replace(",", "");
		const gbpPrice = parseFloat(usdPrice * exchangeGBP).toFixed(2);
		const eurPrice = parseFloat(usdPrice * exchangeEUR).toFixed(2);

		jQuery(this).html("&pound;" + gbpPrice + "<br><span style='font-size: 0.75em;color:crimson;'>($" + usdPrice + " | €" + eurPrice + ")</span>")
	});
}