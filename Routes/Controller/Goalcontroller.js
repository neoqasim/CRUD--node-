const getGoals = (req, res) => {

    res.send("data fetched ")
}

const postGoals = (req, res) => {
    const task = req.body.mytask
    console.log(task);
    res.send("data send ")
}

const updateGoals = (req, res) => {
    const id = req.params.id;
    res.send(`product ith id : ${id} updated  `)
}

const deleteGoals = (req, res) => {

    const id = req.params.id
    res.send(`data  id ${id} is deleted `)
}

module.exports = { getGoals, postGoals, updateGoals, deleteGoals }