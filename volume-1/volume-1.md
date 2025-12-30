The Variables
    const: The default. Cannot be reassigned. (Note: You can still mutate the contents of an object/array declared with const).
    let: Use only if the value needs to change (e.g., counters, loops).
    var: The old way. Global or Function scoped. Avoid it.

    The Temporal Dead Zone (TDZ): 
    You might think let and const aren't hoisted. They are hoisted, but they land in the TDZ.
    Scenario: If you access a var before declaration, you get undefined. If you access a let before 
    declaration, the engine sees it exists but refuses to touch it, throwing a ReferenceError.
    Why? This enforces cleaner code logic. The variable is "dead" until the line of code 
    that defines it runs.

    
The datatypes
    Primitives: String, Number, Boolean, Null, Undefined, Symbol. (Stored by value).
    Reference Types: Objects, Arrays, Functions. (Stored by address/reference).
    Equality: Always use === (Strict Equality). It checks Type AND Value. Never use == (Loose Equality) unless you have a specific reason.

    Autoboxing:
    Floating Point Math:

The Operators
    Arithmetic: +, -, *, /, % (Remainder).
    Logic: && (AND), || (OR), ! (NOT).

    Fixing the "Zero Bug." (Nullish Coalescing)

The Control-Flow
    The "Leaky" Switch Case: The entire switch statement shares one single block scope. Even though the cases look separate, they are technically in the same "room."
    To fix this without renaming variables, you must explicitly give the case its own scope by adding curly braces {}.

    switch case always strictly equals