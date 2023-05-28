import { Component } from '@angular/core';
import { DatabaseRequest } from 'src/app/models/database';
import { DatabaseService } from 'src/app/services/database/database.service';

import { cilStorage, cilLan } from '@coreui/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  icons = { cilLan, cilStorage };
}
