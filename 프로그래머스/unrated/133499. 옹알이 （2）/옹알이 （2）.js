function solution(babbling) {
    return babbling
        .map(b => b.replace(/aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma)/g, " ").replaceAll(" ",""))
        .filter(el => el === "").length
}