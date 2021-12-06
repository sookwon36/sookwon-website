import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation.bar.component.html',
    styleUrls: ['./navigation.bar.component.scss'],
})
export class NavigationBarComponent implements OnInit{

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
    isMobile: boolean | undefined;
    ngOnInit(): void {
        this.isMobile = this.getIsMobile();
        window.onresize = () => this.isMobile = this.getIsMobile();
    }
    getIsMobile(): boolean {
        const w = document.documentElement.clientWidth;
        const breakpoint = 1000;
        if (w < breakpoint) {
          return true;
        } else {
          return false;
        }
    }
}
