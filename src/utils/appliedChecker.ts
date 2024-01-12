import { STAGE_NAMES } from "./enums";

interface ProgressItem {
    percent: number;
    color: string;
    circumference: number;
    name: string;
    value: number;
  }
  
export function calculateResult(data: ProgressItem[]): number {
    // Find the target and applied values
    const targetItem = data.find((item) => item.name === STAGE_NAMES.TARGET);
    const appliedItem = data.find((item) => item.name === STAGE_NAMES.APPLIED);
  
    const target = targetItem?.value || 0;
    const applied = appliedItem?.value || 0;
  
    // Filter out values other than target and applied to find the second largest value
    const otherValues = data
      .filter((item) => item.name !== STAGE_NAMES.TARGET && item.name !== STAGE_NAMES.APPLIED)
      .map((item) => item.value);
  
    const sortedOtherValues = otherValues.sort((a, b) => b - a);
    const secondLargestValue = sortedOtherValues[1];
  
    // Calculate the difference between target and applied
    const targetAppliedDifference = target/applied;
    if (targetAppliedDifference > 4) {
      if (applied / secondLargestValue > 4) {
        return 3;
      } else {
        return 1;
      }
    } else if (targetAppliedDifference < 4 && applied / secondLargestValue >= 4) {
      return 2;
    } else {
      return 0; // You can return a default value if none of the conditions are met
    }
  }
  
  