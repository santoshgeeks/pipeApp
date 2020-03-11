import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  edgeType=[
    { edge: "Blue" },
    { edge: "Red" },
    { edge: "Green" },
    { edge: "Yellow" },
    { edge: "white" },
  ]
  frameBrand=[
    { fBrand: "Blue" },
    { fBrand: "Red" },
    { fBrand: "Green" },
    { fBrand: "Yellow" },
    { fBrand: "white" },
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

  model=[
    { modelName: "569869" },
    { modelName: "6874" },
    { modelName: "3647"},
    { modelName: "1544" },
    { modelName: "216161" },
    { modelName: "15154-ad"},
    { modelName: "15151" },
    { modelName: "12854" },
  ]
  lenseFilter=[
    { lense: "569869" },
    { lense: "6874" },
    { lense: "3647"},
    { lense: "1544" },
    { lense: "216161" },
    { lense: "15154-ad"},
    { lense: "15151" },
    { lense: "12854" },
  ]
  material=[
    { materialType: "569869" },
    { materialType: "6874" },
    { materialType: "3647"},
    { materialType: "1544" },
    { materialType: "216161" },
    { materialType: "15154-ad"},
    { materialType: "15151" },
    { materialType: "12854" },
  ]
  filterColor=[
    { color: "569869" },
    { color: "6874" },
    { color: "3647"},
    { color: "1544" },
    { color: "216161" },
    { color: "15154-ad"},
    { color: "15151" },
    { color: "12854" },
  ]
  verticalBevel=[
    { vBevel: "569869" },
    { vBevel: "6874" },
    { vBevel: "3647"},
    { vBevel: "1544" },
    { vBevel: "216161" },
    { vBevel: "15154-ad"},
    { vBevel: "15151" },
    { vBevel: "12854" },
  ]
  corrdioDesign=[
    { cDesign: "569869" },
    { cDesign: "6874" },
    { cDesign: "3647"},
    { cDesign: "1544" },
    { cDesign: "216161" },
    { cDesign: "15154-ad"},
    { cDesign: "15151" },
    { cDesign: "12854" },
  ]
  lensDesgin=[
    { lDesign: "569869" },
    { lDesign: "6874" },
    { lDesign: "3647"},
    { lDesign: "1544" },
    { lDesign: "216161" },
    { lDesign: "15154-ad"},
    { lDesign: "15151" },
    { lDesign: "12854" },
  ]

  coatingBrand=[
    { cBrand: "569869" },
    { cBrand: "6874" },
    { cBrand: "3647"},
    { cBrand: "1544" },
    { cBrand: "216161" },
    { cBrand: "15154-ad"},
    { cBrand: "15151" },
    { cBrand: "12854" },
  ]
  coatingType=[
    { cotType: "569869" },
    { cotType: "6874" },
    { cotType: "3647"},
    { cotType: "1544" },
    { cotType: "216161" },
    { cotType: "15154-ad"},
    { cotType: "15151" },
    { cotType: "12854" },
  ]
  color=[
    { color: "Red" },
    { color: "Blue" },
    { color: "Yellow"},
    { color: "White" },
    { color: "Pink" },
    { color: "Black"},
    { color: "Navy Blue" },
    { color: "Silver" },
  ]
  tintType=[
    { tintT: "569869" },
    { tintT: "6874" },
    { tintT: "3647"},
    { tintT: "1544" },
    { tintT: "216161" },
    { tintT: "15154-ad"},
    { tintT: "15151" },
    { tintT: "12854" },
  ]
  tintColor=[
    { tColor: "Red" },
    { tColor: "Blue" },
    { tColor: "Yellow"},
    { tColor: "White" },
    { tColor: "Pink" },
    { tColor: "Black"},
    { tColor: "Navy Blue" },
    { tColor: "Silver" },
  ]
  hardCoatColor=[
    { hColor: "Red" },
    { hColor: "Blue" },
    { hColor: "Yellow"},
    { hColor: "White" },
    { hColor: "Pink" },
    { hColor: "Black"},
    { hColor: "Navy Blue" },
    { hColor: "Silver" },
  ]

  showRevieewComponent: boolean = false;
  generalFormGroup: FormGroup;
  submittedGeneral = false;

  frameAndShapeFormGroup: FormGroup;
  submittedFramAndShape = false;

  RXInfoFormGroup: FormGroup;
  submittedRXInfo = false;

  edgerSettingFormGroup: FormGroup;
  submittedEdgerSetting = false;

  lenseSelectionFormGroup: FormGroup;
  submittedLenseSelection = false;
  reviewDataArray
  constructor(private myElement: ElementRef,private formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute) { }
  ngOnInit() {
    this.generalForm();
    this.framAndShapeForm();
    this.RXInfoForm();
    this.EdgerSettingForm();
    this.lenceSelectionForm()
    console.log("Router URl: ", this.router);
  this.route.params.subscribe((params:any)=>{
    console.log("params: ", params);
})
  if (this.router.url.includes('review'))
   this.showRevieewComponent = true;
  }
  generalForm(){
    this.generalFormGroup = this.formBuilder.group({
      lab: ['', Validators.required],
      storeLocation: ['', Validators.required],
      patient: ['', Validators.required],
      billtoAccount: ['',Validators.required],
      shipToAccount: ['', Validators.required],
      PO: ['', Validators.required],
      tray: ['', Validators.required],
      packegeID: ['', Validators.required],
      rush: ['', Validators.required],
  });
  }
  framAndShapeForm(){
    this.frameAndShapeFormGroup = this.formBuilder.group({
      FramComeAndSuply: ['', Validators.required],
      SupplyEdgedLensesOnly: ['', Validators.required],
      framType: ['', Validators.required],
      edgeType: ['',Validators.required],
      frameBrand: ['', Validators.required],
      model: ['', Validators.required],
      color:['', Validators.required],
      HBox: ['', Validators.required],
      VBox: ['', Validators.required],
      DBL:['', Validators.required],
      wrap: ['', Validators.required],
      circ: ['', Validators.required],
      baseCurve:['', Validators.required],
      panto: ['', Validators.required],
      vertex:['', Validators.required],
      fittingVertex: ['', Validators.required],
      retroactiveVert: ['', Validators.required],
      pantoTilt: ['', Validators.required],
      warpAngle: ['', Validators.required],
  });
  }
  RXInfoForm(){
    this.RXInfoFormGroup = this.formBuilder.group({
      SPHERERight: ['', Validators.required],
      CYLRight: ['', Validators.required],
      AXISRight: ['', Validators.required],
      SPHERELeft: ['',Validators.required],
      CYLLeft: ['', Validators.required],
      AXISLeft: ['', Validators.required],
      ADDRight: ['', Validators.required],
      ADDLeft: ['', Validators.required],
      MPDRight: ['', Validators.required],
      FITOCHEIGHTRight: ['', Validators.required],
      MPDLeft: ['', Validators.required],
      FITOCHEIGHTLeft: ['', Validators.required],
      applyPrism: ['', Validators.required],
      PRISM1Right: ['', Validators.required],
      PRISM1RightInOut: ['', Validators.required],
      PRISM2Right: ['', Validators.required],
      PRISM2RightUpDown: ['', Validators.required],
      PRISM1Left: ['', Validators.required],
      PRISM1LeftInOut: ['', Validators.required],
      PRISM2Left: ['', Validators.required],
      PRISM2LeftUpDown: ['', Validators.required],
  });
  }
  EdgerSettingForm(){
    this.edgerSettingFormGroup = this.formBuilder.group({
      bewelPositionSize: ['', Validators.required],
      bewelCurveSize: ['', Validators.required],
      inclineBevel: ['', Validators.required],
      groove: ['',Validators.required],
      groovePositionSize: ['', Validators.required],
      grooveCurveSize: ['', Validators.required],
      grooveDepth: ['', Validators.required],
      grooveWidth: ['', Validators.required],
      inclineGroove: ['', Validators.required],
      polish: ['', Validators.required],
      verticalBevel: ['', Validators.required],
      safetyBevel: ['', Validators.required],
      edgeIncline: ['', Validators.required],
      inclineAmount: ['', Validators.required],
  });
  }
  lenceSelectionForm(){
    this.lenseSelectionFormGroup = this.formBuilder.group({
      autoPickUp: ['', Validators.required],
      autoPickDown: ['', Validators.required],
      lenseFilter: ['', Validators.required],
      filterColor: ['',Validators.required],
      verticalBevel: ['', Validators.required],
      corrdioDesign: ['', Validators.required],
      lensDesgin: ['', Validators.required],
      ARCoating: ['', Validators.required],
      coatingBrand: ['', Validators.required],
      coatingType: ['', Validators.required],
      ARcolor: ['', Validators.required],
      tint: ['', Validators.required],
      tintcolor: ['', Validators.required],
      percent: ['', Validators.required],
      material: ['', Validators.required],
      hardCoat: ['', Validators.required],
      hardCoatDisAndConv: ['', Validators.required],
      mirrorCoating: ['', Validators.required],
      hardCoatColor: ['', Validators.required],
      tintType: ['', Validators.required],
  });
  }
  get general() { return this.generalFormGroup.controls; }
  scroll(id) {
    this.submittedGeneral = true;
    if (this.generalFormGroup.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.generalFormGroup.value, null, 4));


    console.log(id);
    var ele = document.getElementById(id);
    ele.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  review(generalFormValue,frameAndShapeValue,RXInfoFormValue,edgerSettingValue,lenseSelectionFormValue){
    console.log(generalFormValue,frameAndShapeValue,RXInfoFormValue,edgerSettingValue,lenseSelectionFormValue);
    this.reviewDataArray=generalFormValue
  //  reviewDataArray.push(generalFormValue)
  //  reviewDataArray.push(frameAndShapeValue)
  //  reviewDataArray.push(RXInfoFormValue)
  //  reviewDataArray.push(edgerSettingValue)
  //  reviewDataArray.push(lenseSelectionFormValue)
  //   console.log(reviewDataArray);

    this.router.navigate(['home/review']);
  }


}
