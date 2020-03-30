/**
 * Create version information from a version string
 *
 * @example
 * VERSION.full  // Returns: 1.2.3
 * VERSION.major // Returns: 1
 * VERSION.minor // Returns: 2
 * VERSION.patch // Returns: 3
 */
export class Version {
  public readonly major: string;
  public readonly minor: string;
  public readonly patch: string;

  constructor(public full: string) {
    const parts = full.split('.');
    const itemsToRemoveForPatch = 2;

    this.major = parts[0];
    this.minor = parts[1];
    this.patch = parts.slice(itemsToRemoveForPatch).join('.');
  }
}

export const VERSION = new Version('0.0.0-PLACEHOLDER');
