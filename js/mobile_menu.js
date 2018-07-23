let mobileMenu={
	menu: document.getElementById("menuRect"),
	submenus: [],
	opened: false,

	initSubmenus: function()
	{
		let childNodes=this.menu.childNodes[1].childNodes;
		for (let i=1 ; i<childNodes.length - 1 ; i++)
			this.submenus.push( {element: childNodes[i], opened: false} );
	},

	//display menu
	open: function()
	{	
		this.menu.style.display="block";
	},

	//hide menu
	close: function()
	{
		this.menu.style.display="none";
	},

	//handler for mobileMenuIcon's click event
	openClose: function()
	{
		if (this.opened)
			this.close();
		else
			this.open();

		//change state on opposite
		this.opened=!this.opened;
	},

	initEvents: function()
	{
		for (let i=0 ; i<this.submenus.length ; i++)
		{
			if (this.submenus[i].element.childNodes.length>3)
				this.submenus[i].element.addEventListener("click", () => { this.openCloseSubmenu(i); });
		}
	},

	openSubmenus: function(sub)
	{
		let list=sub.element.childNodes[3];
		list.style.display="block";
	},

	closeSubmenus: function(sub)
	{
		let list=sub.element.childNodes[3];
		list.style.display="none";
	},

	openCloseSubmenu: function(id)
	{
		//if it's not an mobile mode the quit
		if (window.innerWidth>1030)
			return;

		if (this.submenus[id].opened)
			this.closeSubmenus(this.submenus[id]);
		else
			this.openSubmenus(this.submenus[id]);
		this.submenus[id].opened=!this.submenus[id].opened;
	}
};

mobileMenu.initSubmenus();
mobileMenu.initEvents();

/*
//variable indicating whether menu should be displayed in mobile mode
let mobileMode=(window.innerWidth <= 600) ? true : false;

//mobile mode media query
let media=window.matchMedia("screen and (max-width: 600px)");
media.addListener(function() { mobileMode=media.matches; } );
*/