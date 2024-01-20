export class Solution {
  public run(datas: string[]): number {
    const mcQueue = [];
    let count = 0;
    for (const data of datas) {
      if (data === "mc") {
        mcQueue.push("mc");
        continue;
      }
      if (data === "easy") {
        const mcData = mcQueue.pop();
        if (mcData) {
          count += 1;
        }
      }
    }
    return count;
  }
}
