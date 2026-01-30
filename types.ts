
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

