
# Task Tracker CLI

A robust, efficient, and easy-to-use command-line tool for managing your tasks. The **Task Tracker CLI** allows you to add, list, complete, and delete tasks while saving all your data in a JSON file for persistence. This tool is perfect for keeping track of your daily to-dos and longer-term goals.

## Features

-   **Add tasks**: Easily create new tasks.
-  **Update tasks**: Easily update tasks.
-   **List tasks**: View all tasks, including their completion status.
-  **Mark In-progress tasks**: Mark tasks as in-progress.
-   **Complete tasks**: Mark tasks as done.
-   **Delete tasks**: Remove tasks from your list.
-   **JSON persistence**: All tasks are stored in a **JSON** file for persistent storage, meaning your tasks will remain saved even after you close the CLI. This makes it easy to retrieve and manage your tasks across different sessions.
-  **Auto-Incrementing Task IDs**: Each task is automatically assigned a unique, **auto-incrementing ID** upon creation, ensuring that each task has a distinct identifier without requiring user input.


## Roadmap


To make this tool accessible to developers of varying backgrounds, we plan to implement the Task Tracker CLI in multiple languages:

 - [x] [Nodejs (Typescript)](https://github.com/Tam643/task_tracker_cli/tree/main/nodejs)
 - [ ] PHP
 - [ ] Rust
 - [ ] C/C++
 - [ ] C#
 - [ ] JAVA 

By providing the tool in different languages, our aim is to help developers learn and compare different programming paradigms through practical experience.

----------

## Usage

### Installation

1.  Clone the repository:
    
    bash
    
    Copy code
    ```bash
    git clone https://github.com/Tam643/task_tracker_cli.git
    cd task-tracker-cli
    ```
    
2.  **Choose the language you want to work with**. Currently, only Nodejs is supported, but more languages (Rust, Python, Java, C++) will be added soon.

-   For Nodejs:
    
    -   Navigate to the `nodejs` folder.
    -   Follow the instructions in the Nodejs README to build and run the Task Tracker CLI.
    
-   For other languages (coming soon):
    
    -   Check back later or contribute to the roadmap for additional language support.
    -   Each language folder will contain its own `README.md` with specific instructions.

### Commands

-   **Add a task**:
    
    Add a new task to the tracker with a simple description.
	```bash
	task-cli add "Buy groceries"
	#Task added successfully (ID: 1)
	```
-   **Update Task**:
	Update description task
	```bash
	task-cli update 1 "Buy groceries and cook dinner"
	#Task updated successfully (ID: 1)
	```
-   **Delete a task**:
    Delete a task from the tracker by specifying its ID.
    ```bash
    task-cli delete 1
    #Task deleted successfully (ID: 1)
    ```
- **Mark in-progress**:
	Mark in-progress task
	```bash
	task-cli mark-in-progress 1
	#Task marked in progress successfully (ID: 1)
	```
- **Mark done**:
	Mark done task
	```bash
	task-cli mark-done 1
	#Task marked done successfully (ID: 1)
	```
-   **List all tasks**:
    List all tasks in the tracker.
    ```bash
    task-cli list
    ```
-   **List done tasks**:
    List all tasks in the tracker.
    ```bash
    task-cli list done
    ```
-   **List todo tasks**:
    List all tasks in the tracker.
    ```bash
    task-cli list todo
    ```
-   **List in-progress tasks**:
    List all tasks in the tracker.
    ```bash
    task-cli list in-progress
    ```

## Vision

This project aims to go beyond being just a utility tool; it is also a **learning project** for new developers. Each language implementation will come with step-by-step tutorials, explaining:

-   How to build CLI applications from scratch.
-   How to test or debug my function
-   The basics of task management logic (CRUD operations).
-   How to work with file-based persistence using formats like JSON.
-   Writing efficient and clean code, following best practices in each language.

I aim to make each tutorial beginner-friendly, ensuring new developers feel comfortable experimenting with code, building out features, and gaining confidence in real-world projects.

## Contributing

We welcome contributions from developers at all levels. If you'd like to contribute:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/new-feature`).
3.  Commit your changes (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature/new-feature`).
5.  Open a pull request.

## Support

<a href="https://www.buymeacoffee.com/tumtheeradach" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License 
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.