/**
 * Create version information from a version string
 */
export class Version {
  public readonly major: string;
  public readonly minor: string;
  public readonly patch: string;

  public constructor(public full: string) {
    const parts = full.split('.');
    const itemsToRemoveForPatch = 2;

    this.major = parts[0];
    this.minor = parts[1];
    this.patch = parts.slice(itemsToRemoveForPatch).join('.');
  }
}

export const VERSION = new Version('0.0.0-PLACEHOLDER');
