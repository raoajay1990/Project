//import { Component } from "@angular/core";

//@Component({
//    selector: 'footer-app',
//    templateUrl:'app/footer/footer.component.html'
//})

//export class FooterComponent {

//}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataService';

@Component({
    selector: 'app-footer',
    templateUrl: 'app/footer/footer.component.html',
    styleUrls: ['app/footer/footer.component.css'],
    providers: [DataService]
})

export class FooterComponent implements OnInit {
    next: HTMLInputElement;
    prev: HTMLInputElement;
    show: HTMLElement;
    prevIndex: number = 0;
    nextIndex: number = 5;
    projDetail: any = [];

    constructor(private _dataService: DataService) {
        this.prepareTotalCollectionFromPath();
    }

    ngOnInit(): void {
        this.prepareList();
    }

    prepareTotalCollectionFromPath() {

        if (this.totalCollection === null) {
            this.totalCollection = this._dataService.testMethod();
        }
    }

    prepareList() {
        this.next = document.getElementById("btnnext") as HTMLInputElement;
        this.prev = document.getElementById("btnprev") as HTMLInputElement;
        if (this.prevIndex === 0 && this.nextIndex === 5) {
            if (this.totalCollection.length > 5) {
                this.next.disabled = false;
                this.prev.disabled = true;
            }

            this.projDetail = this.totalCollection.slice(this.prevIndex, this.nextIndex);
        }
        else {
            if (this.prevIndex != 0) {
                this.prev.disabled = false;
            }
            else {
                this.prev.disabled = true;
            }
            if (this.nextIndex === this.totalCollection.length) {
                this.next.disabled = true;
            }
            else if (this.nextIndex > 5 && this.nextIndex != this.totalCollection.length) {
                this.next.disabled = false;
            }
            this.projDetail = this.totalCollection.slice(this.prevIndex, this.nextIndex);
        }
    }

    prevButton() {
        this.prevIndex = this.prevIndex - 1;
        this.nextIndex = this.nextIndex - 1;

        this.prepareList();
    }

    nextButton() {
        this.prevIndex = this.prevIndex + 1;
        this.nextIndex = this.nextIndex + 1;

        this.prepareList();
    }

    projNotification() {
        //this.show = document.getElementById("show") ;
        //if (!this.show.) {
        //    this.show.disabled = true;
        //}
        //else
        //{
        //    this.show.disabled = false;
        //}
    }
    //totalCollection: any = [];
    totalCollection = [{
        name: '1Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    },
    {
        name: '2Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    },
    {
        name: '3Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    },
    {
        name: '4Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    },
    {
        name: '5Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    }, {
        name: '6Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    }, {
        name: '7Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    }, {
        name: '8Independent House',
        location: 'jksadghfjk',
        client: 'wjed'
    }]


}

