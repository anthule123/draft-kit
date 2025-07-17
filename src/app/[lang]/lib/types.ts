export interface TreeNode {
  name: string, 
    path: string, 
    children?: TreeNode[],
    isMdxFile?: boolean, 
    dir: string,
    color: number, 
    parent?:  TreeNode

}
