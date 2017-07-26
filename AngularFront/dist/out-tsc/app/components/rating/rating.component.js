var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
let RatingComponent = class RatingComponent {
    constructor() { }
    ngOnInit() {
    }
};
RatingComponent = __decorate([
    Component({
        selector: 'app-rating',
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.css']
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);
export { RatingComponent };
/*rating.module('angular-star-rating', [])
    .directive('angularStarRating', angularStarRating);
var app = angular.module('myApp', ['angular-star-rating']);

function myCtrl($scope) {
    $scope.isReadonly = false; // default test value
    $scope.changeOnHover = false; // default test value
    $scope.maxValue = 10; // default test value
    $scope.ratingValue = 5; // default test value
}


function angularStarRating() {
    var directive = {

        restrict: 'EA',
        scope: {
            'value': '=value',
                'max': '=max',
                'hover': '=hover',
                'isReadonly': '=isReadonly'
        },
        link: linkFunc,
        template:
            '<span ng-class="{isReadonly: isReadonly}">' +
            '<i ng-class="renderObj" ' +
            'ng-repeat="renderObj in renderAry" ' +
            'ng-click="setValue($index)" ' +
            'ng-mouseenter="changeValue($index, changeOnHover )" >' +
            '</i>' +
            '</span>',
        replace: true
    };
    return directive;
}

function linkFunc(scope, element, attrs, ctrl) {
    if (scope.max === undefined) scope.max = 5; // default
    console.log(scope.test);

    function renderValue() {
        scope.renderAry = [];
        for (var i = 0; i < scope.max; i++) {
            if (i < scope.value) {
                scope.renderAry.push({
                    'fa fa-star fa-2x': true
                });
            } else {
                scope.renderAry.push({
                    'fa fa-star-o fa-2x': true
                });
            }
        }
    }

    scope.setValue = function (index) {
        if (!scope.isReadonly && scope.isReadonly !== undefined) {
            scope.value = index + 1;
        }
    };

    scope.changeValue = function (index) {
        if (scope.hover) {
            scope.setValue(index);
        } else {
            // !scope.changeOnhover && scope.changeOnhover != undefined
        }
    };

    scope.$watch('value', function (newValue, oldValue) {
        if (newValue) {
            renderValue();
        }
    });
    scope.$watch('max', function (newValue, oldValue) {
        if (newValue) {
            renderValue();
        }
    });

}


*/
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/rating/rating.component.js.map