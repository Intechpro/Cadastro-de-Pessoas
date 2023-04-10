sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("CadastroClientes.controller.CadastroClientes", {

            onSalvarPress: function () {
                var oModel = this.getView().getModel();
                var oData = {
                    Nome: this.getView().byId("nomeInput").getValue(),
                    Sobrenome: this.getView().byId("sobrenomeInput").getValue(),
                    CPF: this.getView().byId("cpfInput").getValue(),
                    Endereço: this.getView().byId("enderecoInput").getValue(),
                    DatadeNascimento: this.getView().byId("datadenascimentoInput").getValue(),
                    Idade: this.getView().byId("idadeInput").getValue()
                };
                oModel.create("/ztestcard", oData, {
                    success: function () {
                        MessageToast.show("Cliente salvo com sucesso!");
                    },
                    error: function () {
                        MessageToast.show("Erro ao salvar cliente.");
                    }
                });
            },

            onEditarPress: function () {
                var oModel = this.getView().getModel();
                var oData = {
                    Nome: this.getView().byId("nomeInput").getValue(),
                    Sobrenome: this.getView().byId("sobrenomeInput").getValue(),
                    CPF: this.getView().byId("cpfInput").getValue(),
                    Endereço: this.getView().byId("enderecoInput").getValue(),
                    DatadeNascimento: this.getView().byId("datadenascimentoInput").getValue(),
                    Idade: this.getView().byId("idadeInput").getValue()
                };
                oModel.update(this.getView().getBindingContext().getPath(), oData, {
                    success: function () {
                        MessageToast.show("Cliente atualizado com sucesso!");
                    },
                    error: function () {
                        MessageToast.show("Erro ao atualizar cliente.");
                    }
                });
            },
            onExcluirPress: function () {
                var oModel = this.getView().getModel();
                var sPath = this.getView().getBindingContext().getPath();
                oModel.remove(sPath, {
                    success: function () {
                        MessageToast.show("excluído com sucesso!");
                    },
                    error: function () {
                        MessageToast.show("Erro ao excluir cliente.");
                    }
                });
            }
        })
    })
