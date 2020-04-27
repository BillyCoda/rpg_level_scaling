import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  mainLevel = 0;
  constant = [100, 100, 100, 100, 100, 100];
  trueStats = [100, 100, 100, 100, 100, 100];
  statsRounded = [100, 100, 100, 100, 100, 100];
  baseStats = [100, 100, 100, 100, 100, 100];
  baseStatModifiers = [1.1, 1.2, 1.1, 1.4, 1.01, 1.05];

  constructor() { }

  ngOnInit() {
  }

  changeMain(event: any) {
    const newLevel = event.target.value;
    if (newLevel < 1) {
      this.resetShownStats();
    } else {
      const levelDifference = newLevel - this.mainLevel;
      this.statChange(levelDifference);
    }
    this.mainLevel = newLevel;
  }

  statChange(levelDiff: number) {
    if (levelDiff > 0) {
      for (let i = 0; i < this.trueStats.length; i++) {
        this.trueStats[i] = levelDiff * (this.trueStats[i] * this.baseStatModifiers[i]);
        this.statsRounded[i] = Math.round(this.trueStats[i]);
      }
    } else {
      for (let i = 0; i < this.trueStats.length; i++) {
        this.trueStats[i] = (levelDiff * -1) * (this.trueStats[i] / this.baseStatModifiers[i]);
        this.statsRounded[i] = Math.round(this.trueStats[i]);
      }
    }
  }

  changeBaseStats() {
    console.log('beep');
  }

  resetShownStats() {
    this.trueStats = this.constant;
    this.statsRounded = this.constant;
  }

  resetBaseStats() {
    this.baseStats = this.constant;
  }

  resetBaseMods() {
    this.baseStatModifiers = [1.1, 1.2, 1.1, 1.4, 1.01, 1.05];
  }
}
