<div align="center">

# DescribeML ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/SOM-Research/DescribeML?label=Version&style=for-the-badge)

DescribeML is a VSCode language plugin to describe machine-learning datasets. <br>

Precisely describe your data's provenance, composition, and social concerns in a structured format.


Make it easy to **reproduce your experiments** to others when you cannot share your data. <br>
<br>
Check out the quick video [presentating](https://www.youtube.com/watch?v=Bf3bhWB-UJY) of the tool, or the [tutorial](https://www.youtube.com/watch?v=1Of1qfuJKvY) presented in the MODELS '22 Conference

</div>

## Installation 

### Via marketplace

The easiest way to install the plugin is by using the **Visual Studio Code Market**. Just type "describeML" in the extension tab, and that's it!

### Manually

Instead, you can install it manually using the packaged release of the plugin in this [repository](https://github.com/SOM-Research/DescribeML) that can be found at the root of the project. 

The file is **DescribeML-0.1.1vsix**

Open your terminal (or the terminal inside the VSCode) and write this:

```

git clone https://github.com/SOM-Research/DescribeML.git datasets
cd datasets 
code --install-extension DescribeML-0.1.1vsix
```

<span style="font-size:0.7em;">*Troubles: If you cannot see the syntax highlight in the examples files (p.e. *Melanoma.descml*) as the image below. Please, reload the VSCode editor and write the code --install command again* </span>

Great! That's it.



## Getting Started

1) The first step is to create a *.descml* file

2) The easy way to start using our tool is to use the *preloader data service*,  located at the top left of your editor, clicking at: <img
  src="https://github.com/SOM-Research/DescribeML/blob/main/fileicons/cloud-computing.png?raw=true"
  alt="preloader service"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; width: 40px">

3) Select your dataset file (*.csv*), and the tool will generate a draft of your description file.

4) To help you, look to the [Language Reference Guide](https://github.com/SOM-Research/DescribeML/blob/main/documentation/language-reference-guide.md) and follow the examples in the **examples/evaluation** [folders](https://github.com/SOM-Research/DescribeML/tree/main/examples/evaluation) to get a sense of the tool's possibilities. Take a look at the *Melanoma.descml* file, for example.
5) During the documentation process, hitting CTRL + Space (equivalent in other OS) gives you auto-completion help. In addition, the part marked with the points below gives you hints to complete the documentation, and the outline in the right part shows you the document structure.

<div align="center">

![Autocompletion feature](https://github.com/SOM-Research/DescribeML/blob/main/fileicons/Autcomplete.gif?raw=true)

</div>

6) Once you are happy with your documentation, you can generate HTML documentation by clicking the generator button next to the prealoder service: <img
  src="https://github.com/SOM-Research/DescribeML/blob/main/fileicons/html.png?raw=true"
  alt="HTML generator"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; width: 40px">







For more information, check out the **quick [presentation](https://www.youtube.com/watch?v=Bf3bhWB-UJY) video** and the [**tutorial**](https://www.youtube.com/watch?v=1Of1qfuJKvY) presented in the MODELS '22 Conference




## Contributing

This project is being development as part of a research line of the [SOM Research Lab](https://som-research.github.io/), but we are open to contributions from the community. If you are interested in contributing to this project, please first read the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines file.

### Repository structure

The following tree shows the list of the repository's relevant sections:

- The *documentation* and *examples* folders contains the mentioend examples and the language reference guide.
- The *out* folder contains the executable plugin in JS. You may not want to dive in as it is generated by the TypeScrpit compiler
- The *src* is have the project's source code
  - The *cli* is the generated grammar and AST from Langium. You may not want to dive in it as it is a generated asset
  - The *generator-service* contains all the code of the tools generation service. Could be a good place to start if you want to improve the generation of the tool.
  - The *uploader-service* contains all the code of the uploader service. Could be a good place to contribute new metrics, or ML techniques to do dataset reverse engineering
  - The *language-server* contains all the language features, and the grammar declaration. If you want to improve the grammar, or some of the features the plugin offers here is the place you may want to start




```
├── documentation
│   └── language-reference-guide.md         // The language reference guide
├── examples
│     ├── evaluation
│       ├── Gender.descml                   // Gender dataset example
|       ├── Melanoma.descml                 // Melanoma dataset example
|       └── Polarity.descml                 // Polarity dataset example
├── out                                     // The generated JS from the src folder
└── src                                     // The source code of the project
  ├── cli                                     // Langium framework utils
  ├── generator-service                       // The tool's HTML generator service
  ├── uploader-service                        // The tool's HTML uploader service
  └── language-server                         // The tool's language features
        ├── generated                           // Generated grammar and AST from Langium
        ├── dataset-description-index.ts        // Custom index feature
        ├── dataset-description-module.ts       // Declaration of the custom language features
        ├── dataset-description-validator.ts    // Custom language features 
        └── dataset-description.langium         // The main grammar file of the tool
  
```


#### Tips to contribute

You may need extra steps to contribute or dive into the plugin or the language. (to match with the exact version of the Langium, the base framework we used)

1 - "npm install" to install dependencies.

2 - Then go to /node_modules folder and delete "langium" and "langium-cli" folder

3 - Copy the folder "langium" and "langium-cli" from folder /packages to /node_modules

4 - Get the folder /packages/langium-vscode and paste it inside your VSCode extension folder (typically <user home>/.vscode/extensions)
  
5 - Install the Langium plugin through the UI of VSCode


#### Debugging the extensions

This repo comes with an already built-in config to debug. Just go to Debug in VSCode, and launch the Extension config. Please check your port 6009 is free.
  
For more information about how the framework works and how the language can be extended, please refer to https://github.com/langium/langium or the VSCode extension API documentation https://code.visualstudio.com/api

## Research background

DescribeML is part of an ongoing research project to improve dataset documentation for machine learning. The core of our proposal is a domain-specific language ([preprint here](https://www.researchgate.net/publication/361836238_A_domain-specific_language_for_describing_machine_learning_datasets)) that allows data creators to describe relevant aspects of their data for the machine learning field and beyond. The [Critical Dataset Studios](https://knowingmachines.org/reading-list#dataset_documentation_practices) of the [Knowing Machines](https://knowingmachines.org) project have compiled an excellent list of current documentation practices.

The tool has been presented at the ACM/IEEE 25th International Conference on [Model Driven Engineering Languages and Systems](https://conf.researchr.org/home/models-2022) and a preprint of the tool publication can be seen [here](https://www.researchgate.net/publication/363256430_DescribeML_A_Tool_for_Describing_Machine_Learning_Datasets)



# Code of Conduct

At SOM Research Lab we are dedicated to creating and maintaining welcoming, inclusive, safe, and harassment-free development spaces. Anyone participating will be subject to and agrees to sign on to our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Shield: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


The source code for the site is licensed under the MIT license, which you can find in the MIT-LICENSE file.

All graphical assets are licensed under the
[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).
