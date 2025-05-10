  export enum Priority {
    High = 1,  
    Medium = 2, 
    Low = 3     
}


    export interface TodoItem {
        id: number;
        text: string;
        priority: Priority;
        completed: boolean;
    }
