const routeError = (req, res) => {
    res.status(404).json({ message: `The request route '${req.url}' is not found` });
}
export default routeError;