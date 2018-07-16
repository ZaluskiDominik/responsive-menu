let openCloseMenu=(function()
{
	let menuClosed=true;
	return function(menu)
	{
		let list=menu.getElementsByTagName("ul")[0];
		let listElem=list.childNodes;
		if (menuClosed)
		{
			list.style.opacity="1";
			menu.style.height="256px";
			menu.style.paddingTop="8px";
			menu.style.paddingBottom="8px";

			for (let i=1 ; i<listElem.length - 1 ; i++)
				listElem[i].style.display="block";
		}
		else
		{	
			menu.style.height="0";
			menu.style.padding="0";
			list.style.opacity="0";

			for (let i=1 ; i<listElem.length - 1 ; i++)
				listElem[i].style.display="none";
		}
		menuClosed=!menuClosed;
	}
})();