import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ELunaTheme } from '@core/theme/models/enums/theme';
import { LunaThemeService } from '@core/theme/theme.service';

@Component({
  selector: 'luna-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly m_lunaTheme: LunaThemeService) {
    this.m_lunaTheme.applyTheme(ELunaTheme.Default);
  }
}
