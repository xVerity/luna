import { Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CassFormValueAccessor,
      multi: true,
    },
  ],
})
export abstract class CassFormValueAccessor<T> implements ControlValueAccessor {
  private m_value: T | null = null;

  private onChange: (value: T) => void = () => {};
  private onTouched: () => void = () => {};

  protected get value(): T | null {
    return this.m_value;
  }

  protected set value(value: T) {
    if (value !== this.m_value) {
      this.m_value = value;
      this.onChange(value);
    }
  }

  public writeValue(value: T): void {
    this.m_value = value;
    this.onChange(value);
  }

  public registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  protected touch(): void {
    this.onTouched();
  }
}
