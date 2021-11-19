import { Component } from "@angular/core";

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation.bar.component.html',
    styleUrls: ['./navigation.bar.component.scss']
})
export class NavigationBarComponent{
    // menuList = ['Home','About Me','Experience','Projects','Contact'];
    menuList = [
        {
            name: 'Home',
            route: '',
        },
        {
            name: 'About Me',
            route: 'about',
        },
        {
            name: 'Experience',
            route: 'experience',
        },
        {
            name: 'Projects',
            route: 'projects',
        },
        {
            name: 'Contact',
            route: 'contact',
        },
    ]
}