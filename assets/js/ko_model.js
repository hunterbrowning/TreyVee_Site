function ViewModel() {
   var self = this;
   var hueArray = [198, 203, 220, 234];
   var colorArray = ["hsl(198, 100%, 66%)", "hsl(203, 95%, 54%)", "hsl(220, 91%, 50%)", "hsl(234, 93%, 47%)"]
   var colorCounter = 0;
   var hueForward = true;
   this.Hue = ko.observable(198);
   // Sat & Light are not currently changing
   self.Sat = ko.observable(100);
   self.Light = ko.observable(70);

   // this.Colorizer = ko.computed(this.someFn);
   self.Colorizer = ko.computed(function(){
      var H = self.Hue();
      var S = self.Sat();
      var L = self.Light();
      var colorHSL = "hsl(" + H +"," + S + "%," + L + "%)";
      return colorHSL;
   });

   self.hslrizer = ko.observable("hsl(198, 100%, 66%)");

   self.colorStepper = function(){
      if (hueForward){
         if (colorCounter == 3){
            hueForward = false;
         } else{
            colorCounter++;
         }
      } else {
         if (colorCounter == 0){
            hueForward = true;
         } else{
            colorCounter--;
         }
      }
      this.hslrizer(colorArray[colorCounter]);
      
   };

   setInterval(this.colorStepper, 250);
};

ko.applyBindings(ViewModel());