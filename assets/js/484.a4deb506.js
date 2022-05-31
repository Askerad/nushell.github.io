(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{1e3:function(e,n,t){"use strict";t.r(n);var o=t(35),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("h2",{attrs:{id:"nushell-configuration-with-env-nu-and-config-nu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nushell-configuration-with-env-nu-and-config-nu"}},[e._v("#")]),e._v(" Nushell Configuration with "),t("code",[e._v("env.nu")]),e._v(" and "),t("code",[e._v("config.nu")])]),e._v(" "),t("p",[e._v("Nushell uses a configuration system that loads+runs two Nushell script files at launch time:\nFirst, "),t("code",[e._v("env.nu")]),e._v(", then "),t("code",[e._v("config.nu")]),e._v(".\nPaths to these files can be found by calling "),t("code",[e._v("echo $nu.env-path")]),e._v(" and "),t("code",[e._v("echo $nu.config-path")]),e._v(".\n"),t("code",[e._v("env.nu")]),e._v(" is meant to define the environment variables which are then available within "),t("code",[e._v("config.nu")]),e._v(".\n"),t("code",[e._v("config.nu")]),e._v(" can be used to add definitions, aliases, and more to the global namespace.")]),e._v(" "),t("p",[t("em",[e._v("(You can think of the Nushell config loading sequence as executing two "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"}},[e._v("REPL"),t("OutboundLink")],1),e._v(" lines on startup: "),t("code",[e._v("source /path/to/env.nu")]),e._v(" and "),t("code",[e._v("source /path/to/config.nu")]),e._v(". Therefore, using "),t("code",[e._v("env.nu")]),e._v(" for environment and "),t("code",[e._v("config.nu")]),e._v(" for other config is just a convention.)")])]),e._v(" "),t("p",[e._v("When you launch Nushell without these files set up, Nushell will prompt you to download the "),t("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("default env.nu")]),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("default config.nu")]),t("OutboundLink")],1),e._v(".\nYou can browse the default files for default values of environment variables and a list of all configurable settings.")]),e._v(" "),t("h3",{attrs:{id:"configuring-env-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-env-config"}},[e._v("#")]),e._v(" Configuring "),t("code",[e._v("$env.config")])]),e._v(" "),t("p",[e._v("Nushell's main settings are kept in the "),t("code",[e._v("config")]),e._v(" environment variable as a record. This record can be created using:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let-env config = {\n  ...\n}\n")])])]),t("p",[e._v("You can also shadow "),t("code",[e._v("$env.config")]),e._v(" and update it:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let-env config = ($env.config | upsert <field name> <field value>)\n")])])]),t("p",[e._v("By convention, this variable is defined in the "),t("code",[e._v("config.nu")]),e._v(" file.")]),e._v(" "),t("h3",{attrs:{id:"environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),t("p",[e._v("You can set environment variables for the duration of a Nushell session using "),t("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[t("code",[e._v("let-env")])]),e._v(" calls inside the "),t("code",[e._v("env.nu")]),e._v(" file. For example:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let-env FOO = 'BAR'\n")])])]),t("p",[t("em",[e._v("(Although $env.config is an environment variable, it is still defined by convention inside config.nu.)")])]),e._v(" "),t("p",[e._v("These are some important variables to look at for Nushell-specific settings:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("LS_COLORS")]),e._v(": Sets up colors per file type in ls")]),e._v(" "),t("li",[t("code",[e._v("PROMPT_COMMAND")]),e._v(": Code to execute for setting up the prompt (block or string)")]),e._v(" "),t("li",[t("code",[e._v("PROMPT_COMMAND_RIGHT")]),e._v(": Code to execute for setting up the right prompt (block)")]),e._v(" "),t("li",[t("code",[e._v('PROMPT_INDICATOR = "〉"')]),e._v(': The indicator printed after the prompt (by default ">"-like Unicode symbol)')]),e._v(" "),t("li",[t("code",[e._v('PROMPT_INDICATOR_VI_INSERT = ": "')])]),e._v(" "),t("li",[t("code",[e._v('PROMPT_INDICATOR_VI_NORMAL = "〉 "')])]),e._v(" "),t("li",[t("code",[e._v('PROMPT_MULTILINE_INDICATOR = "::: "')])])]),e._v(" "),t("h3",{attrs:{id:"color-config-section"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#color-config-section"}},[e._v("#")]),e._v(" Color Config section")]),e._v(" "),t("p",[e._v("You can learn more about setting up colors and theming in the "),t("RouterLink",{attrs:{to:"/book/coloring_and_theming.html"}},[e._v("associated chapter")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"configuring-nu-as-a-login-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-nu-as-a-login-shell"}},[e._v("#")]),e._v(" Configuring Nu as a login shell")]),e._v(" "),t("p",[e._v("To use Nu as a login shell, you'll need to configure the "),t("code",[e._v("$env")]),e._v(" variable. With this, you'll have enough support to run external commands as a login shell.")]),e._v(" "),t("p",[e._v("You can build the full set of environment variables by running Nu inside of another shell, like Bash. Once you're in Nu, you can run a command like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> env | each { |it| echo $\"let-env ($it.name) = '($it.raw)'\" } | str collect (char nl)\n")])])]),t("p",[e._v("This will print out "),t("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[t("code",[e._v("let-env")])]),e._v(" lines, one for each environment variable along with its setting.")],1),e._v(" "),t("p",[e._v("Next, on some distros you'll also need to ensure Nu is in the /etc/shells list:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n/usr/bin/fish\n/home/jonathan/.cargo/bin/nu\n")])])]),t("p",[e._v("With this, you should be able to "),t("code",[e._v("chsh")]),e._v(" and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.")]),e._v(" "),t("h3",{attrs:{id:"macos-keeping-usr-bin-open-as-open"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-keeping-usr-bin-open-as-open"}},[e._v("#")]),e._v(" macOS: Keeping "),t("code",[e._v("/usr/bin/open")]),e._v(" as "),t("code",[e._v("open")])]),e._v(" "),t("p",[e._v("Some tools (e.g. Emacs) rely on an "),t("code",[e._v("open")]),e._v(" command to open files on Mac.\nAs Nushell has its own "),t("RouterLink",{attrs:{to:"/book/commands/open.html"}},[t("code",[e._v("open")])]),e._v(" command which has different semantics and shadows "),t("code",[e._v("/usr/bin/open")]),e._v(", these tools will error out when trying to use it.\nOne way to work around this is to define a custom command for Nushell's "),t("code",[e._v("open")]),e._v(" and create an alias for the system's "),t("code",[e._v("open")]),e._v(" in your "),t("code",[e._v("config.nu")]),e._v(" file like this:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("def nuopen [arg, --raw (-r)] { if $raw { open -r $arg } else { open $arg } }\nalias open = ^open\n")])])]),t("h2",{attrs:{id:"path-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-configuration"}},[e._v("#")]),e._v(" PATH configuration")]),e._v(" "),t("p",[e._v("To append a path to "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"}},[e._v("the PATH variable"),t("OutboundLink")],1),e._v(", you can use "),t("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[t("code",[e._v("let-env")])]),e._v(" and "),t("RouterLink",{attrs:{to:"/book/commands/append.html"}},[t("code",[e._v("append")])]),e._v(" in "),t("code",[e._v("env.nu")]),e._v(":")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let-env PATH = ($env.PATH | append '/some/path')\n")])])]),t("p",[e._v("This will append "),t("code",[e._v("/some/path")]),e._v(" to the end of PATH; you can also use "),t("RouterLink",{attrs:{to:"/book/commands/prepend.html"}},[t("code",[e._v("prepend")])]),e._v(" to add entries to the start of PATH.")],1)])}),[],!1,null,null,null);n.default=a.exports}}]);