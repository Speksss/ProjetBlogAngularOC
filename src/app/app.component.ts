import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'projet-blog';
    
    posts = [
        {
            title: 'Post1',
            content: 'voici le contenu du post1',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Post2',
            content: 'voici le contenu du post2',
            loveIts: 3,
            created_at: new Date()
        },
        {
            title: 'Post3',
            content: 'voici le contenu du post3',
            loveIts: -2,
            created_at: new Date()
        }
    ];
}
