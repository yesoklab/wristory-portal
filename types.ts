
export interface Collection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  itemCount: number;
  floorPrice: number;
}

export interface TokenomicsConfig {
  name: string;
  symbol: string;
  totalSupply: number;
  allocations: {
    category: string;
    percentage: number;
    amount: number;
  }[];
}

export interface StrategyResponse {
  title: string;
  suggestion: string;
  steps: string[];
}

// Global augmentation for the aistudio object provided by the environment
// Using inline structure to prevent conflicts with local exports during interface merging
declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

// Export a helper type for components that need to reference the AIStudio interface
export type AIStudio = NonNullable<Window['aistudio']>;
