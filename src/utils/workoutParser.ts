// Base Chip class
export abstract class Chip {
    content: string;
    abstract type: string;

    constructor(content: string) {
        this.content = content;
    }

    // Static method to try parsing a string into this chip type
    static tryParse(content: string): Chip | null {
        return null;
    }
}

// Normal Chip class (exercise name)
export class ChipNormal extends Chip {
    type: string = "exercise";

    constructor(content: string) {
        super(content);
    }

    // Always succeeds as a fallback
    static tryParse(content: string): ChipNormal {
        return new ChipNormal(content);
    }
}

// Weight Chip class
export class ChipWeight extends Chip {
    type: string = "weight";
    weight: number;
    unit: "lb" | "kg";

    constructor(content: string, weight: number, unit: "lb" | "kg") {
        super(content);
        this.weight = weight;
        this.unit = unit;
    }

    static tryParse(content: string): ChipWeight | null {
        if (content.endsWith("lb") || content.endsWith("kg")) {
            const unit = content.endsWith("lb") ? "lb" : "kg";
            const weightStr = content.substring(0, content.length - unit.length);
            const weight = parseFloat(weightStr);
            
            if (!isNaN(weight)) {
                return new ChipWeight(content, weight, unit as "lb" | "kg");
            }
        }
        
        return null;
    }
}

// Sets/Reps Chip class
export class ChipReps extends Chip {
    type: string = "setsreps";
    reps: number;
    sets?: number;

    private static CHIP_REPS_RE1 = /(\d+)?x(\d+)/i;
    private static CHIP_REPS_RE2 = /(\d+)x/i;

    constructor(content: string, reps: number, sets?: number) {
        super(content);
        this.reps = reps;
        this.sets = sets;
    }

    static tryParse(content: string): ChipReps | null {
        // Try to interpret as a sets/reps ({sets?}x{reps} format)
        const setsRepsMatch = content.match(ChipReps.CHIP_REPS_RE1);

        if (setsRepsMatch !== null) { // interpret as sets and reps
            const sets = setsRepsMatch[1] ? parseInt(setsRepsMatch[1]) : undefined;
            const reps = parseInt(setsRepsMatch[2]);
            
            return new ChipReps(content, reps, sets);
        }

        const repsMatch = content.match(ChipReps.CHIP_REPS_RE2);

        if (repsMatch !== null) {
            const reps = parseInt(repsMatch[1]);
            return new ChipReps(content, reps);
        }

        return null;
    }
}

// Register all available chip classes
const chipClasses = [
    ChipReps,
    ChipWeight,
    ChipNormal // This should be last as it always succeeds
];

export function parseWorkoutInput(query: string): Array<Chip> {
    if (!query.trim()) {
        return [];
    }
    
    const items = query.split(/\s+/);

    return items.map((content): Chip => {
        // Try each chip class's tryParse method in order until one succeeds
        for (const chipClass of chipClasses) {
            const result = chipClass.tryParse(content);
            if (result !== null) {
                return result;
            }
        }
        
        // This should never happen as ChipNormal always returns a chip
        return new ChipNormal(content);
    });
}

// Helper function to extract exercise information from chips
export function extractExerciseInfo(chips: Chip[]): { 
    name: string, 
    weight?: { value: number, unit: string },
    sets?: number,
    reps?: number
} {
    let name = '';
    let weight: { value: number, unit: string } | undefined;
    let sets: number | undefined;
    let reps: number | undefined;
    
    // First collect all exercise name chips
    const nameChips = chips.filter(chip => chip.type === 'exercise');
    if (nameChips.length > 0) {
        name = nameChips.map(chip => chip.content).join(' ');
    }
    
    // Find weight chip
    const weightChip = chips.find(chip => chip.type === 'weight') as ChipWeight | undefined;
    if (weightChip) {
        weight = { value: weightChip.weight, unit: weightChip.unit };
    }
    
    // Find sets/reps chip
    const repsChip = chips.find(chip => chip.type === 'setsreps') as ChipReps | undefined;
    if (repsChip) {
        sets = repsChip.sets || 1;
        reps = repsChip.reps;
    }
    
    return { name, weight, sets, reps };
}

// Exercise type
export interface Exercise {
    id: number;
    name: string;
    weight?: { value: number, unit: string };
    sets: number;
    reps: number;
    completed: number; // Number of completed sets
}

// Workout type
export interface Workout {
    id: number;
    name: string;
    exercises: Exercise[];
    startTime: Date;
    endTime?: Date;
}
