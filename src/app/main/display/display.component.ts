import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  mainLevel = 0;
  strStat = 100;
  dexStat = 100;
  conStat = 100;
  intStat = 100;
  wisStat = 100;
  chaStat = 100;
  baseStrStat = 100;
  baseDexStat = 100;
  baseConStat = 100;
  baseIntStat = 100;
  baseWisStat = 100;
  baseChaStat = 100;
  strMod = 1.1;
  dexMod = 1.1;
  conMod = 1.1;
  intMod = 1.1;
  wisMod = 1.1;
  chaMod = 1.1;

  constructor() { }

  ngOnInit() {
  }

  changeMain(event: any) {
    const newLevel = event.target.value;
    if (newLevel < 1) {
      this.resetStats();
    } else {
      const levelDifference = newLevel - this.mainLevel;
      this.statChange(levelDifference);
    }
    this.mainLevel = newLevel;
  }

  statChange(levelDiff: number) {
    if (levelDiff > 0) {
    this.strStat = levelDiff * (this.strStat * this.strMod);
    } else {
      this.strStat = (levelDiff * -1) * (this.strStat / this.strMod)
    }
  }

  resetStats() {
    this.baseStrStat = 100;
    this.baseDexStat = 100;
    this.baseConStat = 100;
    this.baseIntStat = 100;
    this.baseWisStat = 100;
    this.baseChaStat = 100;
    this.strStat = 100;
    this.dexStat = 100;
    this.conStat = 100;
    this.intStat = 100;
    this.wisStat = 100;
    this.chaStat = 100;
  }

}
