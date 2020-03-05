import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  @ViewChild("General", { static: true }) General: ElementRef;
  @ViewChild("Tracer", { static: true }) Tracer: ElementRef;
  @ViewChild("Frame", { static: true }) Frame: ElementRef;
  @ViewChild("Rx", { static: true }) Rx: ElementRef;
  @ViewChild("Lense", { static: true }) Lense: ElementRef;
  @ViewChild("Review", { static: true }) Review: ElementRef;
  Animal = [
    { name: 'Location1' },
    { name: 'Location2' },
    { name: 'Location3' },
    { name: 'Location4' },
  ];
  selectedValue = "Location1"
  checked
  frameType = [
    { frameName: "Metal" },
    { frameName: "Semi-rimless" },
    { frameName: "Rimless" },
    { frameName: "Plastic" },
    { frameName: "Groove Rimless" },
  ]
  brandName = "Clear";
  brand = [
    { frameName: "Clear" },
    { frameName: "Photochromic" },
    { frameName: "Fix Tint" },
    { frameName: "Blue Filter" },
    { frameName: "Polotoised" },
  ]
  selectedFramType = "Metal"
  selectedBrand = "Clear"
  brandType = [
    { brandName: "Metal" },
    { brandName: "Semi-rimless" },
    { brandName: "Rimless" },
    { brandName: "Plastic" },
    { brandName: "Groove Rimless" },
  ]
  selectedBrandType = "Semi-rimless"
  followFront = "Follow Front";
  Front = "%";
  pssition = "50-50";
  selectedColor = "Blue"
  colorType = [
    { colorName: "Blue" },
    { colorName: "Red" },
    { colorName: "Green" },
    { colorName: "Yellow" },
    { colorName: "white" },
  ]
  showRevieewComponent: boolean = false;

  // selectedValue: string;
  constructor(private myElement: ElementRef,
    public router: Router,
    public route: ActivatedRoute) { }
  ngOnInit() {
    console.log("Router URl: ", this.router);
  this.route.params.subscribe((params:any)=>{
    console.log("params: ", params);
})
  if (this.router.url.includes('review'))
   this.showRevieewComponent = true;
  console.log(this.General);
  }
  scroll(id) {

    console.log(id);

    var ele = document.getElementById(id);
    ele.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  review(){
    this.router.navigate(['home/review']);
  }


}
